import { IsOptional, IsInt, Min, IsIn } from 'class-validator';
export class GetUsersDto {
  @IsOptional()
  email?: string;

  @IsOptional()
  name?: string;

  @IsOptional()
  nick?: string;
}
