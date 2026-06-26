import { PrismaService } from '../prisma/prisma.service';
import { RegisterTokenDto } from './dto/register-token.dto';
export declare class NotificationsService {
    private prisma;
    private readonly logger;
    constructor(prisma: PrismaService);
    registerToken(userId: string, dto: RegisterTokenDto): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        userId: string;
        token: string;
        platform: string;
    }>;
    removeToken(token: string): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        userId: string;
        token: string;
        platform: string;
    }>;
    notifyTrade(issueId: string, trade: string, title: string): Promise<any>;
}
