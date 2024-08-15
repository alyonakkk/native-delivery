import { ApiProperty } from '@nestjs/swagger';
import { IsNumber } from 'class-validator';

export class CreateFavoriteDto {
  @ApiProperty({ example: 1, description: 'Product ID' })
  @IsNumber({}, { message: 'Product ID must be a number' })
  productId: number;
}
