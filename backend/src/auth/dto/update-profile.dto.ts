import { IsEnum, IsOptional, IsString } from 'class-validator';
import { TradeType } from '@prisma/client';

export class UpdateProfileDto {
  @IsString()
  @IsOptional()
  fullName?: string;

  @IsString()
  @IsOptional()
  phone?: string;

  @IsEnum(TradeType)
  @IsOptional()
  trade?: TradeType;
}
