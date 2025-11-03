import {
  IsString,
  IsNotEmpty,
  IsDateString,
  IsIn,
  IsArray,
  IsOptional,
} from 'class-validator';

export class UpdateTaskDto {
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
  @IsOptional()
  users: string[];

  @IsIn(['TODO', 'IN_PROGRESS', 'REVIEW', 'DONE'])
  @IsNotEmpty()
  status: string;
}
