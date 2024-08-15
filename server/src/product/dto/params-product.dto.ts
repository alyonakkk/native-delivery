import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsNumber, IsOptional, IsString } from 'class-validator';

export class ParamsProductDto {
  @ApiProperty({ example: 'Hamburger', description: 'Search value', required: false })
  @IsOptional()
  @IsString({ message: 'Search value must be a string' })
  value?: string;

  @ApiProperty({ example: 5, description: 'Limit', required: false })
  @IsOptional()
  @Type(() => Number)
  @IsNumber({}, { message: 'Limit value must be a number' })
  limit?: number;
}
