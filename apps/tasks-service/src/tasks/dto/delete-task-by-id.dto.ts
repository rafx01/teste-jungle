import { IsString, IsNotEmpty } from 'class-validator';

export class DeleteTaskByIdDto {
  @IsString()
  @IsNotEmpty()
  id: string;
}
