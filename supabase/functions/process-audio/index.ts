import { serve } from "https://deno.land/std@0.177.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const TRADE_KEYWORDS: Record<string, string[]> = {
  plumber: [
    "pipe", "leak", "water", "drain", "faucet", "toilet", "sewer", "valve", "plumbing",
    "tap", "shower", "tub", "cistern", "pressure",
    "plomero", "tubería", "gotera", "agua", "desagüe", "canilla", "inodoro", "ducha", "válvula",
  ],
  electrician: [
    "outlet", "circuit", "wire", "breaker", "light", "switch", "panel", "electrical", "voltage",
    "socket", "fuse", "wiring", "power",
    "electricista", "enchufe", "cable", "interruptor", "luz", "corriente", "tablero", "tomacorriente",
  ],
  carpenter: [
    "door", "window", "frame", "trim", "cabinet", "wood", "shelf", "floor", "hinge", "lock", "handle",
    "carpintero", "puerta", "ventana", "marco", "madera", "bisagra", "cerradura", "manija",
  ],
  painter: [
    "paint", "wall", "crack", "finish", "coat", "primer", "stain", "peeling", "color", "ceiling",
    "pintor", "pintura", "pared", "grieta", "techo", "mancha", "desprendimiento",
  ],
  hvac: [
    "air", "vent", "duct", "ac", "heat", "thermostat", "hvac", "cooling", "fan", "conditioning",
    "aire", "ventilación", "ducto", "calefacción", "termostato", "climatización", "extractor",
  ],
  mason: [
    "concrete", "brick", "mortar", "stone", "foundation", "crack", "plaster", "column", "slab",
    "albañil", "concreto", "ladrillo", "mortero", "piedra", "revoque", "columna", "losa", "hormigón",
  ],
  tiler: [
    "tile", "grout", "ceramic", "porcelain", "mosaic", "backsplash", "adhesive",
    "colocador", "azulejo", "cerámica", "porcelanato", "junta", "mosaico",
  ],
  glazier: [
    "glass", "window", "glazing", "seal", "pane", "mirror",
    "vidrio", "ventana", "sellado", "espejo", "cristal",
  ],
};

function detectTrade(text: string): { trade: string; confidence: number } {
  const lower = text.toLowerCase();
  const scores: Record<string, number> = {};
  let totalHits = 0;

  // First check if the text explicitly names a trade (highest priority)
  const tradeNames: Record<string, string[]> = {
    plumber: ["plumber", "plomero", "plumber:"],
    electrician: ["electrician", "electricista", "electrician:"],
    carpenter: ["carpenter", "carpintero", "carpenter:"],
    painter: ["painter", "pintor", "painter:"],
    hvac: ["hvac", "air conditioning", "climatización"],
    mason: ["mason", "albañil", "masonry"],
    tiler: ["tiler", "tile setter", "colocador"],
    glazier: ["glazier", "glass worker", "vidriero"],
  };

  for (const [trade, names] of Object.entries(tradeNames)) {
    if (names.some((n) => lower.includes(n))) {
      return { trade, confidence: 0.95 };
    }
  }

  // Fall back to keyword scoring
  for (const [trade, keywords] of Object.entries(TRADE_KEYWORDS)) {
    const hits = keywords.filter((kw) => lower.includes(kw)).length;
    if (hits > 0) {
      scores[trade] = hits;
      totalHits += hits;
    }
  }

  if (totalHits === 0) return { trade: "unknown", confidence: 0 };

  const sorted = Object.entries(scores).sort(([, a], [, b]) => b - a);
  const [topTrade, topHits] = sorted[0];
  return { trade: topTrade, confidence: topHits / totalHits };
}

function generateTitle(text: string): string {
  const sentence = text.split(/[.!?]/)[0].trim();
  return sentence.length > 80 ? sentence.substring(0, 77) + "..." : sentence;
}

serve(async (req) => {
  const supabase = createClient(
    Deno.env.get("SUPABASE_URL")!,
    Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!
  );

  const { issue_id, audio_storage_path } = await req.json();

  // Download audio from Supabase Storage
  const { data: audioData, error: dlError } = await supabase.storage
    .from("audio-recordings")
    .download(audio_storage_path);

  if (dlError || !audioData) {
    return new Response(JSON.stringify({ error: dlError?.message ?? "Download failed" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }

  // Call OpenAI Whisper
  const formData = new FormData();
  formData.append(
    "file",
    new Blob([await audioData.arrayBuffer()], { type: "audio/m4a" }),
    "audio.m4a"
  );
  formData.append("model", "whisper-1");
  formData.append("language", "es");

  const whisperResp = await fetch("https://api.openai.com/v1/audio/transcriptions", {
    method: "POST",
    headers: { Authorization: `Bearer ${Deno.env.get("OPENAI_API_KEY")}` },
    body: formData,
  });

  if (!whisperResp.ok) {
    const errText = await whisperResp.text();
    return new Response(JSON.stringify({ error: errText }), {
      status: 502,
      headers: { "Content-Type": "application/json" },
    });
  }

  const { text: transcription } = await whisperResp.json();
  const { trade, confidence } = detectTrade(transcription);
  const title = generateTitle(transcription);

  // Update issue in DB
  const { error: updateError } = await supabase.from("issues").update({
    transcription_raw: transcription,
    description: transcription,
    title,
    assigned_trade: trade,
    detection_confidence: confidence,
    updated_at: new Date().toISOString(),
  }).eq("id", issue_id);

  if (updateError) {
    return new Response(JSON.stringify({ error: updateError.message }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }

  // Find tradespeople with matching trade and notify them
  if (trade !== "unknown") {
    const { data: tradespeople } = await supabase
      .from("user_profiles")
      .select("id")
      .eq("trade", trade)
      .eq("role", "tradesperson");

    if (tradespeople && tradespeople.length > 0) {
      await supabase.functions.invoke("send-notification", {
        body: {
          issue_id,
          trade,
          title,
          recipient_ids: tradespeople.map((t: { id: string }) => t.id),
        },
      });
    }
  }

  return new Response(JSON.stringify({ transcription, trade, confidence }), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
});
