import { JwtService } from '@nestjs/jwt';
import { PrismaService } from '../prisma/prisma.service';
import { RegisterDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';
import { UpdateProfileDto } from './dto/update-profile.dto';
export declare class AuthService {
    private prisma;
    private jwt;
    constructor(prisma: PrismaService, jwt: JwtService);
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
    getProfile(userId: string): Promise<{
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
    updateProfile(userId: string, dto: UpdateProfileDto): Promise<{
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
    private buildResponse;
}
