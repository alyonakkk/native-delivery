import { ApiProperty } from '@nestjs/swagger';
import { ORDER_STATUSES } from '@prisma/client';

import { ProductDto } from '@/product/dto/product.dto';

export class OrderProductDto {
  @ApiProperty({ example: 1, description: 'ID' })
  id: number;

  @ApiProperty({ example: ProductDto, description: 'Product' })
  product: ProductDto;

  @ApiProperty({ example: 1, description: 'Purchase price' })
  price: number;

  @ApiProperty({ example: 1, description: 'Quantity' })
  quantity: number;
}

export class OrderDto {
  @ApiProperty({ example: 1, description: 'ID' })
  id: number;

  @ApiProperty({ example: ORDER_STATUSES.done, description: 'Reference' })
  status: ORDER_STATUSES;

  @ApiProperty({ example: 200.5, description: 'Total price' })
  total: number;

  @ApiProperty({ example: 'asd', description: 'Created at' })
  createdAt: string;

  @ApiProperty({ example: [OrderProductDto], description: 'Products' })
  products: OrderProductDto[];
}
