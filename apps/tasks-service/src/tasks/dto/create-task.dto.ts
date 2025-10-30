import { IsString, IsNotEmpty, IsDateString, IsIn } from 'class-validator';

export class CreateTaskDto {
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  @IsNotEmpty()
  description?: string;

  @IsDateString()
  @IsNotEmpty()
  dueDate?: string;

  @IsIn(['LOW', 'MEDIUM', 'HIGH', 'URGENT'])
  priority?: string;

  @IsString()
  @IsNotEmpty()
  users?: any[];

  @IsString()
  @IsNotEmpty()
  status: string;
}
