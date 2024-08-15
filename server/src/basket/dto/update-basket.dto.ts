import { ApiProperty } from '@nestjs/swagger';

export class UpdateBasketDto {
  @ApiProperty({ example: 1, description: 'Product quantity' })
  quantity: number;
}
