import { IssuesService } from './issues.service';
import { CreateIssueDto } from './dto/create-issue.dto';
import { UpdateStatusDto } from './dto/update-status.dto';
import { AddCommentDto } from './dto/add-comment.dto';
export declare class IssuesController {
    private issuesService;
    constructor(issuesService: IssuesService);
    findByRoom(roomId: string): Promise<{
        photoUrls: string[];
        photos: {
            id: string;
            createdAt: Date;
            issueId: string;
            storagePath: string;
            uploadedBy: string;
        }[];
        id: string;
        roomId: string;
        createdBy: string;
        assignedTrade: import(".prisma/client").$Enums.TradeType;
        assignedTo: string | null;
        status: import(".prisma/client").$Enums.IssueStatus;
        title: string | null;
        description: string | null;
        audioFileUrl: string | null;
        transcriptionRaw: string | null;
        detectionConfidence: number | null;
        priority: number;
        resolvedAt: Date | null;
        createdAt: Date;
        updatedAt: Date;
    }[]>;
    create(req: any, dto: CreateIssueDto): Promise<{
        id: string;
        roomId: string;
        createdBy: string;
        assignedTrade: import(".prisma/client").$Enums.TradeType;
        assignedTo: string | null;
        status: import(".prisma/client").$Enums.IssueStatus;
        title: string | null;
        description: string | null;
        audioFileUrl: string | null;
        transcriptionRaw: string | null;
        detectionConfidence: number | null;
        priority: number;
        resolvedAt: Date | null;
        createdAt: Date;
        updatedAt: Date;
    }>;
    findOne(id: string): Promise<{
        photoUrls: string[];
        photos: {
            id: string;
            createdAt: Date;
            issueId: string;
            storagePath: string;
            uploadedBy: string;
        }[];
        comments: ({
            author: {
                trade: import(".prisma/client").$Enums.TradeType | null;
                id: string;
                createdAt: Date;
                updatedAt: Date;
                email: string;
                password: string;
                fullName: string;
                role: import(".prisma/client").$Enums.UserRole;
                avatarUrl: string | null;
                phone: string | null;
            };
        } & {
            id: string;
            createdAt: Date;
            issueId: string;
            authorId: string;
            body: string;
        })[];
        id: string;
        roomId: string;
        createdBy: string;
        assignedTrade: import(".prisma/client").$Enums.TradeType;
        assignedTo: string | null;
        status: import(".prisma/client").$Enums.IssueStatus;
        title: string | null;
        description: string | null;
        audioFileUrl: string | null;
        transcriptionRaw: string | null;
        detectionConfidence: number | null;
        priority: number;
        resolvedAt: Date | null;
        createdAt: Date;
        updatedAt: Date;
    }>;
    updateStatus(id: string, dto: UpdateStatusDto): Promise<{
        id: string;
        roomId: string;
        createdBy: string;
        assignedTrade: import(".prisma/client").$Enums.TradeType;
        assignedTo: string | null;
        status: import(".prisma/client").$Enums.IssueStatus;
        title: string | null;
        description: string | null;
        audioFileUrl: string | null;
        transcriptionRaw: string | null;
        detectionConfidence: number | null;
        priority: number;
        resolvedAt: Date | null;
        createdAt: Date;
        updatedAt: Date;
    }>;
    remove(id: string): Promise<{
        id: string;
        roomId: string;
        createdBy: string;
        assignedTrade: import(".prisma/client").$Enums.TradeType;
        assignedTo: string | null;
        status: import(".prisma/client").$Enums.IssueStatus;
        title: string | null;
        description: string | null;
        audioFileUrl: string | null;
        transcriptionRaw: string | null;
        detectionConfidence: number | null;
        priority: number;
        resolvedAt: Date | null;
        createdAt: Date;
        updatedAt: Date;
    }>;
    processAudio(req: any, id: string, file: Express.Multer.File): Promise<{
        transcription: string;
        trade: string;
        confidence: number;
    }>;
    addPhoto(req: any, id: string, file: Express.Multer.File): Promise<{
        id: string;
        createdAt: Date;
        issueId: string;
        storagePath: string;
        uploadedBy: string;
    }>;
    getPhotos(id: string): Promise<{
        url: string;
        id: string;
        createdAt: Date;
        issueId: string;
        storagePath: string;
        uploadedBy: string;
    }[]>;
    addComment(req: any, id: string, dto: AddCommentDto): Promise<{
        id: string;
        createdAt: Date;
        issueId: string;
        authorId: string;
        body: string;
    }>;
}
