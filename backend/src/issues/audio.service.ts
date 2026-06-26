import { Injectable, Logger } from '@nestjs/common';
import OpenAI from 'openai';
import * as fs from 'fs';

const TRADE_KEYWORDS: Record<string, string[]> = {
  plumber: ['plomero', 'plomeria', 'cano', 'caño', 'tuberia', 'tubería', 'agua', 'desague', 'desagüe', 'fuga', 'cañería'],
  electrician: ['electricista', 'electricidad', 'cable', 'luz', 'enchufe', 'tomacorriente', 'interruptor', 'corto', 'tablero'],
  carpenter: ['carpintero', 'carpinteria', 'madera', 'puerta', 'ventana', 'mueble', 'bisagra', 'marco'],
  painter: ['pintor', 'pintura', 'pared', 'techo', 'mancha', 'revocar', 'pintar'],
  hvac: ['aire', 'acondicionado', 'calefaccion', 'calefacción', 'ventilacion', 'ventilación', 'ducto', 'climatizacion'],
  mason: ['albanil', 'albañil', 'mamposteria', 'mampostería', 'cemento', 'ladrillo', 'revoque', 'fisura', 'grieta'],
  tiler: ['azulejo', 'ceramica', 'cerámica', 'piso', 'baldosa', 'porcelanato', 'junta'],
  glazier: ['vidrio', 'ventana', 'vidrieria', 'vidriera', 'cristal', 'rotura'],
};

@Injectable()
export class AudioService {
  private readonly logger = new Logger(AudioService.name);
  private _openai: OpenAI | null = null;

  private get openai(): OpenAI {
    if (!this._openai) {
      this._openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
    }
    return this._openai;
  }

  async transcribe(filePath: string): Promise<string> {
    const stream = fs.createReadStream(filePath);
    const response = await this.openai.audio.transcriptions.create({
      file: stream as any,
      model: 'whisper-1',
      language: 'es',
    });
    return response.text;
  }

  detectTrade(text: string): { trade: string; confidence: number } {
    const lower = text.toLowerCase();

    for (const [trade, _] of Object.entries(TRADE_KEYWORDS)) {
      const prefix = `${trade}:`;
      if (lower.includes(prefix)) return { trade, confidence: 1.0 };
    }

    const scores: Record<string, number> = {};
    for (const [trade, keywords] of Object.entries(TRADE_KEYWORDS)) {
      scores[trade] = keywords.filter((kw) => lower.includes(kw)).length;
    }

    const best = Object.entries(scores).sort((a, b) => b[1] - a[1])[0];
    if (!best || best[1] === 0) return { trade: 'general', confidence: 0 };

    const total = Object.values(scores).reduce((a, b) => a + b, 0);
    return { trade: best[0], confidence: best[1] / total };
  }

  generateTitle(transcription: string): string {
    const sentence = transcription.split(/[.!?]/)[0].trim();
    return sentence.length > 80 ? sentence.slice(0, 80) + '…' : sentence;
  }
}
