import { Module } from '@nestjs/common';

import { PrismaModule } from '@/prisma/prisma.module';

import { BasketController } from './basket.controller';
import { BasketService } from './basket.service';

@Module({
  controllers: [BasketController],
  providers: [BasketService],
  imports: [PrismaModule]
})
export class BasketModule {}
