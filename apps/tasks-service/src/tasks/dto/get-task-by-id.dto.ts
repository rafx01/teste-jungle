import { IsString, IsNotEmpty } from 'class-validator';

export class GetTaskByIdDto {
  @IsString()
  @IsNotEmpty()
  id: string;
}
