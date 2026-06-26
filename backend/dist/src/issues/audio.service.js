"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var AudioService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.AudioService = void 0;
const common_1 = require("@nestjs/common");
const openai_1 = __importDefault(require("openai"));
const fs = __importStar(require("fs"));
const TRADE_KEYWORDS = {
    plumber: ['plomero', 'plomeria', 'cano', 'caño', 'tuberia', 'tubería', 'agua', 'desague', 'desagüe', 'fuga', 'cañería'],
    electrician: ['electricista', 'electricidad', 'cable', 'luz', 'enchufe', 'tomacorriente', 'interruptor', 'corto', 'tablero'],
    carpenter: ['carpintero', 'carpinteria', 'madera', 'puerta', 'ventana', 'mueble', 'bisagra', 'marco'],
    painter: ['pintor', 'pintura', 'pared', 'techo', 'mancha', 'revocar', 'pintar'],
    hvac: ['aire', 'acondicionado', 'calefaccion', 'calefacción', 'ventilacion', 'ventilación', 'ducto', 'climatizacion'],
    mason: ['albanil', 'albañil', 'mamposteria', 'mampostería', 'cemento', 'ladrillo', 'revoque', 'fisura', 'grieta'],
    tiler: ['azulejo', 'ceramica', 'cerámica', 'piso', 'baldosa', 'porcelanato', 'junta'],
    glazier: ['vidrio', 'ventana', 'vidrieria', 'vidriera', 'cristal', 'rotura'],
};
let AudioService = AudioService_1 = class AudioService {
    logger = new common_1.Logger(AudioService_1.name);
    _openai = null;
    get openai() {
        if (!this._openai) {
            this._openai = new openai_1.default({ apiKey: process.env.OPENAI_API_KEY });
        }
        return this._openai;
    }
    async transcribe(filePath) {
        const stream = fs.createReadStream(filePath);
        const response = await this.openai.audio.transcriptions.create({
            file: stream,
            model: 'whisper-1',
            language: 'es',
        });
        return response.text;
    }
    detectTrade(text) {
        const lower = text.toLowerCase();
        for (const [trade, _] of Object.entries(TRADE_KEYWORDS)) {
            const prefix = `${trade}:`;
            if (lower.includes(prefix))
                return { trade, confidence: 1.0 };
        }
        const scores = {};
        for (const [trade, keywords] of Object.entries(TRADE_KEYWORDS)) {
            scores[trade] = keywords.filter((kw) => lower.includes(kw)).length;
        }
        const best = Object.entries(scores).sort((a, b) => b[1] - a[1])[0];
        if (!best || best[1] === 0)
            return { trade: 'general', confidence: 0 };
        const total = Object.values(scores).reduce((a, b) => a + b, 0);
        return { trade: best[0], confidence: best[1] / total };
    }
    generateTitle(transcription) {
        const sentence = transcription.split(/[.!?]/)[0].trim();
        return sentence.length > 80 ? sentence.slice(0, 80) + '…' : sentence;
    }
};
exports.AudioService = AudioService;
exports.AudioService = AudioService = AudioService_1 = __decorate([
    (0, common_1.Injectable)()
], AudioService);
//# sourceMappingURL=audio.service.js.map