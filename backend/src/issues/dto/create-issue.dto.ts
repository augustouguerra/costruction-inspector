import { IsString } from 'class-validator';

export class CreateIssueDto {
  @IsString()
  roomId: string;
}
