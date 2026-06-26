import { FloorsService } from './floors.service';
import { CreateFloorDto } from './dto/create-floor.dto';
export declare class FloorsController {
    private floorsService;
    constructor(floorsService: FloorsService);
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
    remove(id: string): import(".prisma/client").Prisma.Prisma__FloorClient<{
        number: number;
        id: string;
        createdAt: Date;
        projectId: string;
        label: string;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
}
