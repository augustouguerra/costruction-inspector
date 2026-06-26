import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateIssueDto } from './dto/create-issue.dto';
import { UpdateStatusDto } from './dto/update-status.dto';
import { AddCommentDto } from './dto/add-comment.dto';
import { AudioService } from './audio.service';
import { NotificationsService } from '../notifications/notifications.service';
import * as path from 'path';
import * as fs from 'fs';
import { TradeType } from '@prisma/client';

@Injectable()
export class IssuesService {
  constructor(
    private prisma: PrismaService,
    private audioService: AudioService,
    private notificationsService: NotificationsService,
  ) {}

  async findByRoom(roomId: string) {
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

  async findOne(issueId: string) {
    const issue = await this.prisma.issue.findUnique({
      where: { id: issueId },
      include: { photos: true, comments: { include: { author: true } } },
    });
    if (!issue) throw new NotFoundException('Issue not found');
    return {
      ...issue,
      photoUrls: issue.photos.map((p) => `/uploads/${p.storagePath}`),
    };
  }

  async create(userId: string, dto: CreateIssueDto) {
    return this.prisma.issue.create({
      data: {
        roomId: dto.roomId,
        createdBy: userId,
        assignedTrade: 'unknown',
        status: 'open',
      },
    });
  }

  async updateStatus(issueId: string, dto: UpdateStatusDto) {
    return this.prisma.issue.update({
      where: { id: issueId },
      data: {
        status: dto.status,
        resolvedAt: dto.status === 'resolved' ? new Date() : undefined,
      },
    });
  }

  async remove(issueId: string) {
    return this.prisma.issue.delete({ where: { id: issueId } });
  }

  async processAudio(issueId: string, userId: string, file: Express.Multer.File) {
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
        assignedTrade: trade as TradeType,
        detectionConfidence: confidence,
        audioFileUrl: audioUrl,
      },
    });

    await this.notificationsService.notifyTrade(issueId, trade, title);

    return { transcription, trade, confidence };
  }

  async addPhoto(issueId: string, userId: string, file: Express.Multer.File) {
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

  async getPhotos(issueId: string) {
    const photos = await this.prisma.issuePhoto.findMany({ where: { issueId } });
    return photos.map((p) => ({ ...p, url: `/uploads/${p.storagePath}` }));
  }

  async addComment(issueId: string, userId: string, dto: AddCommentDto) {
    return this.prisma.issueComment.create({
      data: { issueId, authorId: userId, body: dto.body },
    });
  }
}
