import { Injectable } from '@nestjs/common';

import { BasketObject } from '@/basket/basket.object';
import { PrismaService } from '@/prisma/prisma.service';

import { BasketProductObject } from './basketProduct.object';
import { CreateBasketDto } from './dto/create-basket.dto';
import { UpdateBasketDto } from './dto/update-basket.dto';

@Injectable()
export class BasketService {
  constructor(private prismaService: PrismaService) {}

  async add({ basketId, productId }: CreateBasketDto) {
    return await this.prismaService.basketProduct.create({
      data: { basketId, productId, quantity: 1 },
      select: BasketProductObject
    });
  }

  async findOne(userId: number) {
    return await this.prismaService.basket.upsert({
      where: { userId },
      create: { userId },
      update: { userId },
      select: BasketObject
    });
  }

  async update(id: number, { quantity }: UpdateBasketDto) {
    return await this.prismaService.basketProduct.update({
      where: { id },
      data: { quantity },
      select: BasketProductObject
    });
  }

  async remove(id: number) {
    await this.prismaService.basketProduct.delete({ where: { id } });

    return null;
  }

  async reset(basketId: number) {
    await this.prismaService.basketProduct.deleteMany({ where: { basketId } });

    return null;
  }
}
