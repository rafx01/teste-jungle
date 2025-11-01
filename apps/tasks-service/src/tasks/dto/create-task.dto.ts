import {
  IsString,
  IsNotEmpty,
  IsDateString,
  IsIn,
  IsArray,
} from 'class-validator';

export class CreateTaskDto {
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  @IsNotEmpty()
  description: string;

  @IsDateString()
  @IsNotEmpty()
  dueDate: string;

  @IsIn(['LOW', 'MEDIUM', 'HIGH', 'URGENT'])
  @IsNotEmpty()
  priority: string;

  @IsArray()
  @IsString({ each: true })
  @IsNotEmpty()
  users: string[];

  @IsIn(['TODO', 'IN_PROGRESS', 'REVIEW', 'DONE'])
  @IsNotEmpty()
  status: string;
}
