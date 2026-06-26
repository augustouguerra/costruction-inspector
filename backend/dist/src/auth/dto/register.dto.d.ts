import { UserRole, TradeType } from '@prisma/client';
export declare class RegisterDto {
    email: string;
    password: string;
    fullName: string;
    role: UserRole;
    trade?: TradeType;
}
