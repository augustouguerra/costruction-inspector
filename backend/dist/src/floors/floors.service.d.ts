import { PrismaService } from '../prisma/prisma.service';
import { CreateFloorDto } from './dto/create-floor.dto';
export declare class FloorsService {
    private prisma;
    constructor(prisma: PrismaService);
    findAll(projectId: string): import(".prisma/client").Prisma.PrismaPromise<{
        number: number;
        id: string;
        createdAt: Date;
        projectId: string;
        label: string;
    }[]>;
    create(projectId: string, dto: CreateFloorDto): import(".prisma/client").Prisma.Prisma__FloorClient<{
        number: number;
        id: string;
        createdAt: Date;
        projectId: string;
        label: string;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    remove(floorId: string): import(".prisma/client").Prisma.Prisma__FloorClient<{
        number: number;
        id: string;
        createdAt: Date;
        projectId: string;
        label: string;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
}
