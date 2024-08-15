import { Injectable, NotFoundException } from '@nestjs/common';

import { PrismaService } from '@/prisma/prisma.service';
import { generateSlug } from '@/utils/generateSlug';

import { CreateProductDto } from './dto/create-product.dto';
import { ParamsProductDto } from './dto/params-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { ProductObject } from './product.object';

@Injectable()
export class ProductService {
  constructor(private prismaService: PrismaService) {}

  async create({ name, description, price, photo, categoryId }: CreateProductDto) {
    return await this.prismaService.product.create({
      data: { name, description, photo, price, slug: generateSlug(name), category: { connect: { id: categoryId } } },
      select: ProductObject
    });
  }

  async findAll(query?: ParamsProductDto) {
    return await this.prismaService.product.findMany({
      take: query?.limit,
      where: {
        OR: [
          {
            name: { contains: query?.value ?? '', mode: 'insensitive' }
          }
        ]
      },
      select: ProductObject
    });
  }

  async findBySlug(slug: string) {
    const product = await this.prismaService.product.findUnique({
      where: { slug },
      select: ProductObject
    });

    if (!product) throw new NotFoundException(`Product with slug "${slug}" is not found`);

    return product;
  }

  async update(id: number, { name, description, price, photo, categoryId }: UpdateProductDto) {
    return await this.prismaService.product.update({
      where: { id },
      data: { name, description, photo, price, slug: generateSlug(name), category: { connect: { id: categoryId } } },
      select: ProductObject
    });
  }

  async remove(id: number) {
    await this.prismaService.product.delete({ where: { id } });

    return null;
  }
}
