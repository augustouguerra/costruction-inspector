import { IsEnum, IsString } from 'class-validator';

export class RegisterTokenDto {
  @IsString()
  token: string;

  @IsEnum(['android', 'ios'])
  platform: 'android' | 'ios';
}
