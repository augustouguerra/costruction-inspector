import { NotificationsService } from './notifications.service';
import { RegisterTokenDto } from './dto/register-token.dto';
export declare class NotificationsController {
    private notificationsService;
    constructor(notificationsService: NotificationsService);
    registerToken(req: any, dto: RegisterTokenDto): Promise<{
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
}
