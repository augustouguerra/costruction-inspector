import { IsString } from 'class-validator';

export class CreateApartmentDto {
  @IsString()
  identifier: string;
}
