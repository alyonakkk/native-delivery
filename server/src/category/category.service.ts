import { Injectable, NotFoundException } from '@nestjs/common';

import { PrismaService } from '@/prisma/prisma.service';
import { ProductObject } from '@/product/product.object';
import { generateSlug } from '@/utils/generateSlug';

import { CategoryObject } from './category.object';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';

@Injectable()
export class CategoryService {
  constructor(private prismaService: PrismaService) {}

  async create(body: CreateCategoryDto) {
    return await this.prismaService.category.create({
      data: { ...body, slug: generateSlug(body.name) },
      select: CategoryObject
    });
  }

  async findAll() {
    return await this.prismaService.category.findMany({ select: CategoryObject });
  }

  async findBySlug(slug: string) {
    const category = await this.prismaService.category.findUnique({
      where: { slug },
      select: { ...CategoryObject, products: { select: ProductObject } }
    });

    if (!category) throw new NotFoundException(`Category with slug "${slug}" is not found`);

    return category;
  }

  async update(id: number, body: UpdateCategoryDto) {
    return await this.prismaService.category.update({
      where: { id },
      data: { ...body, slug: generateSlug(body.name) },
      select: CategoryObject
    });
  }

  async remove(id: number) {
    await this.prismaService.category.delete({ where: { id } });

    return null;
  }
}
