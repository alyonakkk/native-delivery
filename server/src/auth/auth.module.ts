import { Module } from '@nestjs/common';
import { JwtModule, JwtService } from '@nestjs/jwt';

import { PrismaModule } from '@/prisma/prisma.module';
import { UserModule } from '@/user/user.module';

import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { PasswordService } from './password.service';
import { TokenService } from './token.service';

@Module({
  controllers: [AuthController],
  providers: [JwtService, AuthService, PasswordService, TokenService],
  imports: [JwtModule.register({ global: true }), PrismaModule, UserModule],
  exports: [TokenService, PasswordService]
})
export class AuthModule {}
