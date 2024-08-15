import { ApiProperty } from '@nestjs/swagger';
import { IsNumber } from 'class-validator';

export class CreateBasketDto {
  @ApiProperty({ example: 1, description: 'Basket ID' })
  @IsNumber({}, { message: 'Basket ID must be a number' })
  basketId: number;

  @ApiProperty({ example: 1, description: 'Product ID' })
  @IsNumber({}, { message: 'Product ID must be a number' })
  productId: number;
}
