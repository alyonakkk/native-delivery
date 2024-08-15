import { ApiProperty } from '@nestjs/swagger';

import { ProductDto } from '@/product/dto/product.dto';

export class FavoriteDto {
  @ApiProperty({ example: 1, description: 'Favorite ID' })
  id: number;

  @ApiProperty({ example: ProductDto, description: 'Favorite product' })
  product: ProductDto;
}
