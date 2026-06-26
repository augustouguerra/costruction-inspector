import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateApartmentDto } from './dto/create-apartment.dto';

@Injectable()
export class ApartmentsService {
  constructor(private prisma: PrismaService) {}

  findAll(floorId: string) {
    return this.prisma.apartment.findMany({
      where: { floorId },
      orderBy: { identifier: 'asc' },
    });
  }

  create(floorId: string, dto: CreateApartmentDto) {
    return this.prisma.apartment.create({ data: { ...dto, floorId } });
  }

  remove(apartmentId: string) {
    return this.prisma.apartment.delete({ where: { id: apartmentId } });
  }
}
