import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { APP_FILTER, APP_GUARD, APP_PIPE } from '@nestjs/core';
import { ServeStaticModule } from '@nestjs/serve-static';

import { HttpExceptionFilter } from '@/exceptions/exception.filter';
import { ValidationPipe } from '@/pipes/validation.pipe';
import { PrismaModule } from '@/prisma/prisma.module';

import { AuthGuard } from './auth/auth.guard';
import { AuthModule } from './auth/auth.module';
import { BasketModule } from './basket/basket.module';
import { CategoryModule } from './category/category.module';
import { FavoriteModule } from './favorite/favorite.module';
import { OrderModule } from './order/order.module';
import { ProductModule } from './product/product.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: './.env'
    }),
    ServeStaticModule.forRoot({
      rootPath: 'uploads',
      serveRoot: '/uploads/'
    }),
    PrismaModule,
    AuthModule,
    UserModule,
    ProductModule,
    CategoryModule,
    OrderModule,
    FavoriteModule,
    BasketModule
  ],
  providers: [
    { provide: APP_FILTER, useClass: HttpExceptionFilter },
    { provide: APP_GUARD, useClass: AuthGuard },
    { provide: APP_PIPE, useClass: ValidationPipe }
  ]
})
export class AppModule {}
