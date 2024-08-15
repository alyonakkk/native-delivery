import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class CreateCategoryDto {
  @ApiProperty({ example: 'Food', description: 'Name' })
  @IsString({ message: 'Category name must be a string' })
  name: string;

  @ApiProperty({ example: '/uploads/categories/food.png', description: 'Photo source' })
  @IsString({ message: 'Category photo must be a string' })
  photo: string;
}
