import { PrismaService } from '../prisma/prisma.service';
import { CreateIssueDto } from './dto/create-issue.dto';
import { UpdateStatusDto } from './dto/update-status.dto';
import { AddCommentDto } from './dto/add-comment.dto';
import { AudioService } from './audio.service';
import { NotificationsService } from '../notifications/notifications.service';
export declare class IssuesService {
    private prisma;
    private audioService;
    private notificationsService;
    constructor(prisma: PrismaService, audioService: AudioService, notificationsService: NotificationsService);
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
    findOne(issueId: string): Promise<{
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
    create(userId: string, dto: CreateIssueDto): Promise<{
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
    updateStatus(issueId: string, dto: UpdateStatusDto): Promise<{
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
    remove(issueId: string): Promise<{
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
    processAudio(issueId: string, userId: string, file: Express.Multer.File): Promise<{
        transcription: string;
        trade: string;
        confidence: number;
    }>;
    addPhoto(issueId: string, userId: string, file: Express.Multer.File): Promise<{
        id: string;
        createdAt: Date;
        issueId: string;
        storagePath: string;
        uploadedBy: string;
    }>;
    getPhotos(issueId: string): Promise<{
        url: string;
        id: string;
        createdAt: Date;
        issueId: string;
        storagePath: string;
        uploadedBy: string;
    }[]>;
    addComment(issueId: string, userId: string, dto: AddCommentDto): Promise<{
        id: string;
        createdAt: Date;
        issueId: string;
        authorId: string;
        body: string;
    }>;
}
