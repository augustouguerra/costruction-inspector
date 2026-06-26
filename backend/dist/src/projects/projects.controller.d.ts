import { ProjectsService } from './projects.service';
import { CreateProjectDto } from './dto/create-project.dto';
export declare class ProjectsController {
    private projectsService;
    constructor(projectsService: ProjectsService);
    findAll(req: any): Promise<{
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
    create(req: any, dto: CreateProjectDto): Promise<{
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
    remove(req: any, id: string): Promise<{
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
