import { Body, Controller, Delete, Get, HttpStatus, Param, Post } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';

import { SessionDto } from '@/auth/dto/session.dto';
import { ApiResponses } from '@/decorators/apiResponse.decorator';
import { Session } from '@/decorators/session.decorator';
import { FavoriteDto } from '@/favorite/dto/favorite.dto';
import { ProductDto } from '@/product/dto/product.dto';

import { CreateFavoriteDto } from './dto/create-favorite.dto';
import { FavoriteService } from './favorite.service';

@ApiTags('favorites')
@Controller('favorites')
export class FavoriteController {
  constructor(private readonly favoriteService: FavoriteService) {}

  @Post()
  @ApiResponses([
    { status: HttpStatus.CREATED, type: FavoriteDto },
    { status: HttpStatus.BAD_REQUEST },
    { status: HttpStatus.UNAUTHORIZED }
  ])
  @ApiBearerAuth()
  create(@Session() session: SessionDto, @Body() body: CreateFavoriteDto) {
    return this.favoriteService.create(session.id, body.productId);
  }

  @Get()
  @ApiResponses([{ status: HttpStatus.OK, type: [ProductDto] }, { status: HttpStatus.UNAUTHORIZED }])
  @ApiBearerAuth()
  findAll(@Session() session: SessionDto) {
    return this.favoriteService.findAll(session.id);
  }

  @Delete(':id')
  @ApiResponses([
    { status: HttpStatus.OK, type: null },
    { status: HttpStatus.BAD_REQUEST },
    { status: HttpStatus.UNAUTHORIZED }
  ])
  @ApiBearerAuth()
  remove(@Session() session: SessionDto, @Param('id') id: string) {
    return this.favoriteService.remove(+id);
  }
}
