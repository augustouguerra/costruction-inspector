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
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.IssuesService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
const audio_service_1 = require("./audio.service");
const notifications_service_1 = require("../notifications/notifications.service");
const path = __importStar(require("path"));
const fs = __importStar(require("fs"));
let IssuesService = class IssuesService {
    prisma;
    audioService;
    notificationsService;
    constructor(prisma, audioService, notificationsService) {
        this.prisma = prisma;
        this.audioService = audioService;
        this.notificationsService = notificationsService;
    }
    async findByRoom(roomId) {
        const issues = await this.prisma.issue.findMany({
            where: { roomId },
            orderBy: { createdAt: 'desc' },
            include: { photos: true },
        });
        return issues.map((i) => ({
            ...i,
            photoUrls: i.photos.map((p) => `/uploads/${p.storagePath}`),
        }));
    }
    async findOne(issueId) {
        const issue = await this.prisma.issue.findUnique({
            where: { id: issueId },
            include: { photos: true, comments: { include: { author: true } } },
        });
        if (!issue)
            throw new common_1.NotFoundException('Issue not found');
        return {
            ...issue,
            photoUrls: issue.photos.map((p) => `/uploads/${p.storagePath}`),
        };
    }
    async create(userId, dto) {
        return this.prisma.issue.create({
            data: {
                roomId: dto.roomId,
                createdBy: userId,
                assignedTrade: 'unknown',
                status: 'open',
            },
        });
    }
    async updateStatus(issueId, dto) {
        return this.prisma.issue.update({
            where: { id: issueId },
            data: {
                status: dto.status,
                resolvedAt: dto.status === 'resolved' ? new Date() : undefined,
            },
        });
    }
    async remove(issueId) {
        return this.prisma.issue.delete({ where: { id: issueId } });
    }
    async processAudio(issueId, userId, file) {
        const uploadsDir = path.join(process.cwd(), process.env.UPLOADS_DIR ?? 'uploads', 'audio');
        fs.mkdirSync(uploadsDir, { recursive: true });
        const fileName = `${userId}/${issueId}/recording.m4a`;
        const filePath = path.join(uploadsDir, `${userId}_${issueId}_recording.m4a`);
        fs.writeFileSync(filePath, file.buffer);
        const transcription = await this.audioService.transcribe(filePath);
        const { trade, confidence } = this.audioService.detectTrade(transcription);
        const title = this.audioService.generateTitle(transcription);
        const audioUrl = `/uploads/audio/${userId}_${issueId}_recording.m4a`;
        const updated = await this.prisma.issue.update({
            where: { id: issueId },
            data: {
                transcriptionRaw: transcription,
                description: transcription,
                title,
                assignedTrade: trade,
                detectionConfidence: confidence,
                audioFileUrl: audioUrl,
            },
        });
        await this.notificationsService.notifyTrade(issueId, trade, title);
        return { transcription, trade, confidence };
    }
    async addPhoto(issueId, userId, file) {
        const uploadsDir = path.join(process.cwd(), process.env.UPLOADS_DIR ?? 'uploads', 'photos');
        fs.mkdirSync(uploadsDir, { recursive: true });
        const ext = path.extname(file.originalname);
        const storagePath = `photos/${issueId}_${Date.now()}${ext}`;
        const filePath = path.join(process.cwd(), process.env.UPLOADS_DIR ?? 'uploads', storagePath);
        fs.writeFileSync(filePath, file.buffer);
        return this.prisma.issuePhoto.create({
            data: { issueId, storagePath, uploadedBy: userId },
        });
    }
    async getPhotos(issueId) {
        const photos = await this.prisma.issuePhoto.findMany({ where: { issueId } });
        return photos.map((p) => ({ ...p, url: `/uploads/${p.storagePath}` }));
    }
    async addComment(issueId, userId, dto) {
        return this.prisma.issueComment.create({
            data: { issueId, authorId: userId, body: dto.body },
        });
    }
};
exports.IssuesService = IssuesService;
exports.IssuesService = IssuesService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        audio_service_1.AudioService,
        notifications_service_1.NotificationsService])
], IssuesService);
//# sourceMappingURL=issues.service.js.map