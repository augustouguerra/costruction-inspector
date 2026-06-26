import { Injectable, NotFoundException, ForbiddenException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateProjectDto } from './dto/create-project.dto';

@Injectable()
export class ProjectsService {
  constructor(private prisma: PrismaService) {}

  async findAll(userId: string) {
    return this.prisma.project.findMany({
      where: {
        members: { some: { userId } },
      },
      orderBy: { createdAt: 'desc' },
    });
  }

  async create(userId: string, dto: CreateProjectDto) {
    return this.prisma.$transaction(async (tx) => {
      const project = await tx.project.create({
        data: { ...dto, ownerId: userId },
      });
      await tx.projectMember.create({
        data: { projectId: project.id, userId, role: 'architect' },
      });
      return project;
    });
  }

  async remove(userId: string, projectId: string) {
    const project = await this.prisma.project.findUnique({ where: { id: projectId } });
    if (!project) throw new NotFoundException('Project not found');
    if (project.ownerId !== userId) throw new ForbiddenException();
    return this.prisma.project.delete({ where: { id: projectId } });
  }
}
