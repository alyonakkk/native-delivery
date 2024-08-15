import { Body, Controller, Delete, Get, HttpStatus, Param, Patch, Post } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';

import { SessionDto } from '@/auth/dto/session.dto';
import { ApiResponses } from '@/decorators/apiResponse.decorator';
import { Session } from '@/decorators/session.decorator';

import { BasketService } from './basket.service';
import { BasketDto, BasketProductDto } from './dto/basket.dto';
import { CreateBasketDto } from './dto/create-basket.dto';
import { UpdateBasketDto } from './dto/update-basket.dto';

@ApiTags('basket')
@Controller('basket')
export class BasketController {
  constructor(private readonly basketService: BasketService) {}

  @Post()
  @ApiResponses([
    { status: HttpStatus.CREATED, type: BasketProductDto },
    { status: HttpStatus.BAD_REQUEST },
    { status: HttpStatus.UNAUTHORIZED }
  ])
  @ApiBearerAuth()
  add(@Body() body: CreateBasketDto) {
    return this.basketService.add(body);
  }

  @Get()
  @ApiResponses([{ status: HttpStatus.OK, type: BasketDto }, { status: HttpStatus.UNAUTHORIZED }])
  @ApiBearerAuth()
  findOne(@Session() session: SessionDto) {
    return this.basketService.findOne(session.id);
  }

  @Patch(':id')
  @ApiResponses([
    { status: HttpStatus.OK, type: BasketProductDto },
    { status: HttpStatus.BAD_REQUEST },
    { status: HttpStatus.UNAUTHORIZED }
  ])
  @ApiBearerAuth()
  update(@Param('id') id: string, @Body() body: UpdateBasketDto) {
    return this.basketService.update(+id, body);
  }

  @Patch(':id/reset')
  @ApiResponses([{ status: HttpStatus.OK, type: null }, { status: HttpStatus.UNAUTHORIZED }])
  @ApiBearerAuth()
  reset(@Param('id') id: string) {
    return this.basketService.reset(+id);
  }

  @Delete(':id')
  @ApiResponses([{ status: HttpStatus.OK, type: null }, { status: HttpStatus.UNAUTHORIZED }])
  @ApiBearerAuth()
  remove(@Param('id') id: string) {
    return this.basketService.remove(+id);
  }
}
