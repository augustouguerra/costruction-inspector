import { IsEmail, IsEnum, IsOptional, IsString, MinLength } from 'class-validator';
import { UserRole, TradeType } from '@prisma/client';

export class RegisterDto {
  @IsEmail()
  email: string;

  @IsString()
  @MinLength(6)
  password: string;

  @IsString()
  fullName: string;

  @IsEnum(UserRole)
  role: UserRole;

  @IsEnum(TradeType)
  @IsOptional()
  trade?: TradeType;
}
