import { ApiProperty } from '@nestjs/swagger';

import { ProductDto } from '@/product/dto/product.dto';

export class BasketProductDto {
  @ApiProperty({ example: 1, description: 'Basket product ID' })
  id: number;

  @ApiProperty({ example: 1, description: 'Quantity' })
  quantity: number;

  @ApiProperty({ example: ProductDto, description: 'Product' })
  product: ProductDto;
}

export class BasketDto {
  @ApiProperty({ example: 1, description: 'Basket ID' })
  id: number;

  @ApiProperty({ example: [BasketProductDto], description: 'Basket products' })
  products: BasketProductDto[];
}
