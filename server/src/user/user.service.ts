import { faker } from '@faker-js/faker';
import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';

import { PrismaService } from '@/prisma/prisma.service';

import { PasswordService } from '../auth/password.service';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserObject } from './user.object';

@Injectable()
export class UserService {
  constructor(
    private prismaService: PrismaService,
    private passwordService: PasswordService
  ) {}

  async create(email: string, hash: string, salt: string) {
    return await this.prismaService.user.create({
      data: {
        email,
        salt,
        hash,
        name: faker.person.firstName(),
        photo: faker.image.avatar()
      }
    });
  }

  async findById(id: number) {
    return await this.prismaService.user.findFirst({ where: { id }, select: UserObject });
  }

  async findByEmail(email: string) {
    return await this.prismaService.user.findFirst({ where: { email }, select: UserObject });
  }

  async update(id: number, dto: UpdateUserDto) {
    const user = await this.findById(id);
    if (!user) throw new NotFoundException(`User is not found`);

    if (dto?.oldPassword && dto?.newPassword && dto?.newPasswordConfirm) {
      const hash = this.passwordService.getHash(dto.oldPassword, user.salt);
      if (hash !== user.hash) throw new BadRequestException('Incorrect old password');

      if (dto.newPassword !== dto.newPasswordConfirm)
        throw new BadRequestException('New confirm password must be equal to new password');
    }

    await this.prismaService.user.update({
      where: { id },
      data: {
        name: dto?.name || undefined,
        email: dto?.email || undefined,
        hash: dto?.newPassword ? this.passwordService.getHash(dto.newPassword, user.salt) : undefined
      }
    });

    return null;
  }
}
