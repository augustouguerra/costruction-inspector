import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateFloorDto } from './dto/create-floor.dto';

@Injectable()
export class FloorsService {
  constructor(private prisma: PrismaService) {}

  findAll(projectId: string) {
    return this.prisma.floor.findMany({
      where: { projectId },
      orderBy: { number: 'asc' },
    });
  }

  create(projectId: string, dto: CreateFloorDto) {
    return this.prisma.floor.create({ data: { ...dto, projectId } });
  }

  remove(floorId: string) {
    return this.prisma.floor.delete({ where: { id: floorId } });
  }
}
