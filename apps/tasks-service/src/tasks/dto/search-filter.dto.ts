import { IsOptional, Min } from 'class-validator';
export class SearchFilterDto {
  @IsOptional()
  page?: number;

  @Min(1, {
    message: 'Limit must be at least 1',
  })
  @IsOptional()
  limit?: number;
}
