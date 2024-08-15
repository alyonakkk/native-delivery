import { Body, Controller, Delete, Get, HttpStatus, Param, Patch, Post } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';

import { ApiResponses } from '../decorators/apiResponse.decorator';
import { CategoryService } from './category.service';
import { CategoryDto } from './dto/category.dto';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';

@ApiTags('categories')
@Controller('categories')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

  @Post()
  @ApiResponses([
    { status: HttpStatus.CREATED, type: CategoryDto },
    { status: HttpStatus.BAD_REQUEST },
    { status: HttpStatus.UNAUTHORIZED }
  ])
  @ApiBearerAuth()
  create(@Body() body: CreateCategoryDto) {
    return this.categoryService.create(body);
  }

  @Get()
  @ApiResponses([{ status: HttpStatus.OK, type: [CategoryDto] }, { status: HttpStatus.UNAUTHORIZED }])
  @ApiBearerAuth()
  findAll() {
    return this.categoryService.findAll();
  }

  @Get(':slug')
  @ApiResponses([
    { status: HttpStatus.OK, type: CategoryDto },
    { status: HttpStatus.UNAUTHORIZED },
    { status: HttpStatus.NOT_FOUND }
  ])
  @ApiBearerAuth()
  findBySlug(@Param('slug') slug: string) {
    return this.categoryService.findBySlug(slug);
  }

  @Patch(':id')
  @ApiResponses([
    { status: HttpStatus.OK, type: CategoryDto },
    { status: HttpStatus.BAD_REQUEST },
    { status: HttpStatus.UNAUTHORIZED }
  ])
  @ApiBearerAuth()
  update(@Param('id') id: string, @Body() body: UpdateCategoryDto) {
    return this.categoryService.update(+id, body);
  }

  @Delete(':id')
  @ApiResponses([{ status: HttpStatus.OK }, { status: HttpStatus.UNAUTHORIZED }])
  @ApiBearerAuth()
  remove(@Param('id') id: string) {
    return this.categoryService.remove(+id);
  }
}
