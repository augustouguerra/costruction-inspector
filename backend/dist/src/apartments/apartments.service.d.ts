import { PrismaService } from '../prisma/prisma.service';
import { CreateApartmentDto } from './dto/create-apartment.dto';
export declare class ApartmentsService {
    private prisma;
    constructor(prisma: PrismaService);
    findAll(floorId: string): import(".prisma/client").Prisma.PrismaPromise<{
        id: string;
        createdAt: Date;
        identifier: string;
        floorId: string;
    }[]>;
    create(floorId: string, dto: CreateApartmentDto): import(".prisma/client").Prisma.Prisma__ApartmentClient<{
        id: string;
        createdAt: Date;
        identifier: string;
        floorId: string;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    remove(apartmentId: string): import(".prisma/client").Prisma.Prisma__ApartmentClient<{
        id: string;
        createdAt: Date;
        identifier: string;
        floorId: string;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
}
