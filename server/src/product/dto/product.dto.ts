import { ApiProperty } from '@nestjs/swagger';

import { CategoryDto } from '@/category/dto/category.dto';

export class ProductDto {
  @ApiProperty({ example: 1, description: 'ID' })
  id: number;

  @ApiProperty({ example: CategoryDto, description: 'Category' })
  category: CategoryDto;

  @ApiProperty({ example: 'Hamburger', description: 'Name' })
  name: string;

  @ApiProperty({ example: 'hamburger', description: 'Slug' })
  slug: string;

  @ApiProperty({ example: 'Hamburger is good', description: 'Description' })
  description: string;

  @ApiProperty({ example: 500.5, description: 'Price' })
  price: number;

  @ApiProperty({ example: '/uploads/products/hamburger.png', description: 'Photo source' })
  photo: string;
}
