import {
  BadRequestException,
  ConflictException,
  Injectable,
  NotFoundException,
  UnauthorizedException
} from '@nestjs/common';

import { UserService } from '@/user/user.service';

import { LogInDto } from './dto/log-in.dto';
import { RefreshDto } from './dto/refresh.dto';
import { SignUpDto } from './dto/sign-up.dto';
import { PasswordService } from './password.service';
import { TokenService } from './token.service';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UserService,
    private tokenService: TokenService,
    private passwordService: PasswordService
  ) {}

  async signUp({ password, email }: SignUpDto) {
    const candidate = await this.usersService.findByEmail(email);
    if (candidate) throw new ConflictException('User is already created');

    const salt = this.passwordService.getSalt();
    const hash = this.passwordService.getHash(password, salt);

    await this.usersService.create(email, hash, salt);

    return null;
  }

  async login({ password, email }: LogInDto) {
    const user = await this.usersService.findByEmail(email);
    if (!user) throw new NotFoundException(`User with email ${email} is not found`);

    const hash = this.passwordService.getHash(password, user.salt);
    if (hash !== user.hash) throw new BadRequestException('Incorrect password');

    return {
      user: AuthService.getFormattedUser(user),
      tokens: await this.tokenService.generateTokens(user.id, email)
    };
  }

  async refresh({ refreshToken }: RefreshDto) {
    if (!refreshToken) throw new UnauthorizedException();

    const token = await this.tokenService.validateRefreshToken(refreshToken);
    if (!token) throw new UnauthorizedException();

    const user = await this.usersService.findByEmail(token.email);
    if (!user) throw new NotFoundException(`User with email ${token.email} is not found`);

    return await this.tokenService.generateTokens(user.id, user.email);
  }

  private static getFormattedUser(user: unknown) {
    const currentUser = { ...user };

    delete currentUser.hash;
    delete currentUser.salt;

    return currentUser;
  }
}
