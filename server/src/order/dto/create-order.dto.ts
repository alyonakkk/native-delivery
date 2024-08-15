import { ApiProperty } from '@nestjs/swagger';
import { IsArray, IsNumber } from 'class-validator';

export class CreateOrderProductDto {
  @ApiProperty({ example: 1, isArray: true, type: Number, description: 'Product ID' })
  @IsNumber({}, { each: true, message: 'Every item of array must be a number' })
  id: number;

  @ApiProperty({ example: 1, description: 'Purchase price' })
  @IsNumber({}, { message: 'Price must be a number' })
  price: number;

  @ApiProperty({ example: 1, description: 'Quantity' })
  @IsNumber({}, { message: 'Quantity must be a number' })
  quantity: number;
}

export class CreateOrderDto {
  @ApiProperty({
    example: [CreateOrderProductDto],
    isArray: true,
    type: CreateOrderProductDto,
    description: 'Product ID'
  })
  @IsArray({ message: 'productsIds must be an array' })
  products: CreateOrderProductDto[];
}
