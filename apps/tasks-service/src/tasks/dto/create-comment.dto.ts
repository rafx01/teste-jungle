import { IsString } from 'class-validator';

export class CreateCommentDto {
  @IsString()
  text: string;

  @IsString()
  taskId: string;

  @IsString()
  userId: string;
}
