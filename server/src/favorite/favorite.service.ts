import { Injectable } from '@nestjs/common';

import { PrismaService } from '@/prisma/prisma.service';

import { FavoriteObject } from './favorite.object';

@Injectable()
export class FavoriteService {
  constructor(private prismaService: PrismaService) {}

  async create(userId: number, productId: number) {
    return await this.prismaService.favoriteProduct.create({ data: { userId, productId }, select: FavoriteObject });
  }

  async findAll(userId: number) {
    return await this.prismaService.favoriteProduct.findMany({
      where: { userId },
      select: FavoriteObject
    });
  }

  async remove(favoriteId: number) {
    await this.prismaService.favoriteProduct.delete({ where: { id: favoriteId } });

    return null;
  }
}
