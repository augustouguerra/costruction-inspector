import { TradeType } from '@prisma/client';
export declare class UpdateProfileDto {
    fullName?: string;
    phone?: string;
    trade?: TradeType;
}
