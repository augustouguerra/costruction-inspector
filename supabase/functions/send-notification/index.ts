import { serve } from "https://deno.land/std@0.177.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

serve(async (req) => {
  const supabase = createClient(
    Deno.env.get("SUPABASE_URL")!,
    Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!
  );

  const { issue_id, trade, title, recipient_ids } = await req.json();

  // Fetch FCM tokens for all recipients
  const { data: tokens, error } = await supabase
    .from("fcm_tokens")
    .select("token, user_id")
    .in("user_id", recipient_ids);

  if (error || !tokens || tokens.length === 0) {
    return new Response(JSON.stringify({ sent: 0 }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  }

  const notificationTitle = `New ${trade} task`;
  const notificationBody = title;

  // Send FCM notification
  const fcmPayload = {
    registration_ids: tokens.map((t: { token: string }) => t.token),
    notification: {
      title: notificationTitle,
      body: notificationBody,
    },
    data: {
      issue_id,
      trade,
      click_action: "FLUTTER_NOTIFICATION_CLICK",
    },
  };

  const fcmResp = await fetch("https://fcm.googleapis.com/fcm/send", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `key=${Deno.env.get("FCM_SERVER_KEY")}`,
    },
    body: JSON.stringify(fcmPayload),
  });

  const fcmResult = await fcmResp.json();

  // Log notifications to DB
  await supabase.from("notification_log").insert(
    tokens.map((t: { token: string; user_id: string }) => ({
      issue_id,
      recipient_id: t.user_id,
      fcm_token: t.token,
      title: notificationTitle,
      body: notificationBody,
      status: fcmResult.failure === 0 ? "sent" : "partial",
    }))
  );

  return new Response(
    JSON.stringify({ sent: tokens.length, fcmResult }),
    { status: 200, headers: { "Content-Type": "application/json" } }
  );
});
