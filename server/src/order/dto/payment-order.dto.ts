import { ApiProperty } from '@nestjs/swagger';

export class PaymentOrderDto {
  @ApiProperty({ example: 1, description: 'ID' })
  id: number;

  @ApiProperty({ example: 'asd', description: 'Order payment intent' })
  paymentIntent: string;
}
