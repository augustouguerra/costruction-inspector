import { Strategy } from 'passport-jwt';
import { PrismaService } from '../prisma/prisma.service';
declare const JwtStrategy_base: new (...args: [opt: import("passport-jwt").StrategyOptionsWithRequest] | [opt: import("passport-jwt").StrategyOptionsWithoutRequest]) => Strategy & {
    validate(...args: any[]): unknown;
};
export declare class JwtStrategy extends JwtStrategy_base {
    private prisma;
    constructor(prisma: PrismaService);
    validate(payload: {
        sub: string;
        email: string;
    }): Promise<{
        email: string;
        password: string;
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
export {};
