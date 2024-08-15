import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsString } from 'class-validator';

export class CreateProductDto {
  @ApiProperty({ example: 1, description: 'Category ID' })
  @IsNumber({}, { message: 'Category ID must be a number' })
  categoryId: number;

  @ApiProperty({ example: 'Hamburger', description: 'Name' })
  @IsString({ message: 'Product name must be a string' })
  name: string;

  @ApiProperty({ example: 'Hamburger is good', description: 'Description' })
  @IsString({ message: 'Product description must be a string' })
  description: string;

  @ApiProperty({ example: 500.5, description: 'Price' })
  @IsNumber({}, { message: 'Product price must be a number' })
  price: number;

  @ApiProperty({ example: '/uploads/products/hamburger.png', description: 'Photo source' })
  @IsString({ message: 'Product photo must be a string' })
  photo: string;
}
