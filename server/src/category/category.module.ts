import { Module } from '@nestjs/common';

import { PrismaModule } from '@/prisma/prisma.module';

import { CategoryController } from './category.controller';
import { CategoryService } from './category.service';

@Module({
  controllers: [CategoryController],
  providers: [CategoryService],
  imports: [PrismaModule]
})
export class CategoryModule {}
