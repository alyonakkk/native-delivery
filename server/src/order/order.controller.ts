import { Body, Controller, Get, HttpStatus, Param, Patch, Post } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';

import { SessionDto } from '@/auth/dto/session.dto';
import { ApiResponses } from '@/decorators/apiResponse.decorator';

import { Session } from '../decorators/session.decorator';
import { CreateOrderDto } from './dto/create-order.dto';
import { OrderDto } from './dto/order.dto';
import { PaymentOrderDto } from './dto/payment-order.dto';
import { OrderService } from './order.service';

@ApiTags('orders')
@Controller('orders')
export class OrderController {
  constructor(private readonly orderService: OrderService) {}

  @Post()
  @ApiResponses([
    { status: HttpStatus.CREATED, type: PaymentOrderDto },
    { status: HttpStatus.BAD_REQUEST },
    { status: HttpStatus.UNAUTHORIZED }
  ])
  @ApiBearerAuth()
  create(@Session() session: SessionDto, @Body() body: CreateOrderDto) {
    return this.orderService.create(session.id, body);
  }

  @Get()
  @ApiResponses([{ status: HttpStatus.OK, type: [OrderDto] }, { status: HttpStatus.UNAUTHORIZED }])
  @ApiBearerAuth()
  findAll(@Session() session: SessionDto) {
    return this.orderService.findAll(session.id);
  }

  @Get(':id')
  @ApiResponses([{ status: HttpStatus.OK, type: OrderDto }, { status: HttpStatus.UNAUTHORIZED }])
  @ApiBearerAuth()
  findOne(@Param('id') id: string) {
    return this.orderService.findOne(+id);
  }

  @Patch(':id/paid')
  @ApiResponses([
    { status: HttpStatus.OK, type: null },
    { status: HttpStatus.BAD_REQUEST },
    { status: HttpStatus.UNAUTHORIZED }
  ])
  @ApiBearerAuth()
  update(@Param('id') id: string) {
    return this.orderService.paid(+id);
  }
}
