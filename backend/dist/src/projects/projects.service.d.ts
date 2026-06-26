import { PrismaService } from '../prisma/prisma.service';
import { CreateProjectDto } from './dto/create-project.dto';
export declare class ProjectsService {
    private prisma;
    constructor(prisma: PrismaService);
    findAll(userId: string): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        name: string;
        address: string | null;
        description: string | null;
        ownerId: string;
        coverImageUrl: string | null;
        isActive: boolean;
    }[]>;
    create(userId: string, dto: CreateProjectDto): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        name: string;
        address: string | null;
        description: string | null;
        ownerId: string;
        coverImageUrl: string | null;
        isActive: boolean;
    }>;
    remove(userId: string, projectId: string): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        name: string;
        address: string | null;
        description: string | null;
        ownerId: string;
        coverImageUrl: string | null;
        isActive: boolean;
    }>;
}
