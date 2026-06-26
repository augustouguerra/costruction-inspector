import { IsInt, IsString } from 'class-validator';
import { Type } from 'class-transformer';

export class CreateFloorDto {
  @Type(() => Number)
  @IsInt()
  number: number;

  @IsString()
  label: string;
}
