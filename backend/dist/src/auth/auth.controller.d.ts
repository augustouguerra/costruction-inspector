import { AuthService } from './auth.service';
import { RegisterDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';
import { UpdateProfileDto } from './dto/update-profile.dto';
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    register(dto: RegisterDto): Promise<{
        token: string;
        user: {
            id: string;
            email: string;
            fullName: string;
            role: string;
            trade: string | null;
            avatarUrl: string | null;
            phone: string | null;
            createdAt: Date;
            updatedAt: Date;
        };
    }>;
    login(dto: LoginDto): Promise<{
        token: string;
        user: {
            id: string;
            email: string;
            fullName: string;
            role: string;
            trade: string | null;
            avatarUrl: string | null;
            phone: string | null;
            createdAt: Date;
            updatedAt: Date;
        };
    }>;
    getProfile(req: any): Promise<{
        email: string;
        fullName: string;
        role: import(".prisma/client").$Enums.UserRole;
        trade: import(".prisma/client").$Enums.TradeType | null;
        phone: string | null;
        id: string;
        avatarUrl: string | null;
        createdAt: Date;
        updatedAt: Date;
    }>;
    updateProfile(req: any, dto: UpdateProfileDto): Promise<{
        email: string;
        fullName: string;
        role: import(".prisma/client").$Enums.UserRole;
        trade: import(".prisma/client").$Enums.TradeType | null;
        phone: string | null;
        id: string;
        avatarUrl: string | null;
        createdAt: Date;
        updatedAt: Date;
    }>;
}
