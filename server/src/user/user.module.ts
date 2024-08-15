import { Module } from '@nestjs/common';

import { PasswordService } from '@/auth/password.service';
import { PrismaModule } from '@/prisma/prisma.module';

import { UserController } from './user.controller';
import { UserService } from './user.service';

@Module({
  controllers: [UserController],
  providers: [UserService, PasswordService],
  imports: [PrismaModule],
  exports: [UserService]
})
export class UserModule {}
