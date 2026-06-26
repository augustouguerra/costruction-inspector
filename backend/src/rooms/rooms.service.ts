import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateRoomDto } from './dto/create-room.dto';

@Injectable()
export class RoomsService {
  constructor(private prisma: PrismaService) {}

  findAll(apartmentId: string) {
    return this.prisma.room.findMany({
      where: { apartmentId },
      orderBy: { name: 'asc' },
    });
  }

  create(apartmentId: string, dto: CreateRoomDto) {
    return this.prisma.room.create({ data: { ...dto, apartmentId } });
  }

  remove(roomId: string) {
    return this.prisma.room.delete({ where: { id: roomId } });
  }
}
