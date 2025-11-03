import { IsString, IsNotEmpty } from 'class-validator';

export class GetTaskCommentsByIdDto {
  @IsString()
  @IsNotEmpty()
  id: string;
}
