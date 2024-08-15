import { ApiProperty } from '@nestjs/swagger';

export class CategoryDto {
  @ApiProperty({ example: 1, description: 'ID' })
  id: number;

  @ApiProperty({ example: 'Food', description: 'Name' })
  name: string;

  @ApiProperty({ example: 'food', description: 'Slug' })
  slug: string;

  @ApiProperty({ example: '/uploads/categories/food.png', description: 'Photo source' })
  photo: string;
}
