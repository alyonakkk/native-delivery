import { Body, Controller, Delete, Get, HttpStatus, Param, Patch, Post, Query } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';

import { ApiResponses } from '@/decorators/apiResponse.decorator';

import { CreateProductDto } from './dto/create-product.dto';
import { ParamsProductDto } from './dto/params-product.dto';
import { ProductDto } from './dto/product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { ProductService } from './product.service';

@ApiTags('products')
@Controller('products')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Post()
  @ApiResponses([
    { status: HttpStatus.CREATED, type: ProductDto },
    { status: HttpStatus.BAD_REQUEST },
    { status: HttpStatus.UNAUTHORIZED }
  ])
  @ApiBearerAuth()
  create(@Body() body: CreateProductDto) {
    return this.productService.create(body);
  }

  @Get()
  @ApiResponses([{ status: HttpStatus.OK, type: [ProductDto] }, { status: HttpStatus.UNAUTHORIZED }])
  @ApiBearerAuth()
  findAll(@Query() query: ParamsProductDto) {
    return this.productService.findAll(query);
  }

  @Get(':slug')
  @ApiResponses([{ status: HttpStatus.OK, type: ProductDto }, { status: HttpStatus.UNAUTHORIZED }])
  @ApiBearerAuth()
  findBySlug(@Param('slug') slug: string) {
    return this.productService.findBySlug(slug);
  }

  @Patch(':id')
  @ApiResponses([
    { status: HttpStatus.OK, type: ProductDto },
    { status: HttpStatus.BAD_REQUEST },
    { status: HttpStatus.UNAUTHORIZED }
  ])
  @ApiBearerAuth()
  update(@Param('id') id: string, @Body() body: UpdateProductDto) {
    return this.productService.update(+id, body);
  }

  @Delete(':id')
  @ApiResponses([{ status: HttpStatus.OK }, { status: HttpStatus.UNAUTHORIZED }])
  @ApiBearerAuth()
  remove(@Param('id') id: string) {
    return this.productService.remove(+id);
  }
}
