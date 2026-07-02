import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateIssueDto } from './dto/create-issue.dto';
import { UpdateStatusDto } from './dto/update-status.dto';
import { AddCommentDto } from './dto/add-comment.dto';
import * as path from 'path';
import * as fs from 'fs';

@Injectable()
export class IssuesService {
  constructor(private prisma: PrismaService) {}

  async findByRoom(roomId: string) {
    const issues = await this.prisma.issue.findMany({
      where: { roomId },
      orderBy: { createdAt: 'desc' },
      include: {
        photos: true,
        audios: true,
        creator: { select: { id: true, fullName: true, email: true } },
      },
    });
    return issues.map((i) => ({
      ...i,
      photoUrls: i.photos.map((p) => `/uploads/${p.storagePath}`),
      audioUrls: i.audios.map((a) => `/uploads/${a.storagePath}`),
    }));
  }

  async findOne(issueId: string) {
    const issue = await this.prisma.issue.findUnique({
      where: { id: issueId },
      include: { photos: true, audios: true, comments: { include: { author: true } } },
    });
    if (!issue) throw new NotFoundException('Issue not found');
    return {
      ...issue,
      photoUrls: issue.photos.map((p) => `/uploads/${p.storagePath}`),
      audioUrls: issue.audios.map((a) => `/uploads/${a.storagePath}`),
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

  async addAudio(issueId: string, userId: string, file: Express.Multer.File) {
    const uploadsDir = path.join(process.cwd(), process.env.UPLOADS_DIR ?? 'uploads', 'audio');
    fs.mkdirSync(uploadsDir, { recursive: true });

    const storagePath = `audio/${issueId}_${Date.now()}.m4a`;
    const filePath = path.join(process.cwd(), process.env.UPLOADS_DIR ?? 'uploads', storagePath);
    fs.writeFileSync(filePath, file.buffer);

    const audio = await this.prisma.issueAudio.create({
      data: { issueId, storagePath, uploadedBy: userId },
    });

    return { ...audio, url: `/uploads/${audio.storagePath}` };
  }

  async getAudios(issueId: string) {
    const audios = await this.prisma.issueAudio.findMany({
      where: { issueId },
      orderBy: { createdAt: 'desc' },
    });
    return audios.map((a) => ({ ...a, url: `/uploads/${a.storagePath}` }));
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
