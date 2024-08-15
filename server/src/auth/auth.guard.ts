import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Request } from 'express';

import { IS_PUBLIC_KEY } from '@/decorators/public.decorator';

import { TokenService } from './token.service';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    private tokenService: TokenService,
    private reflector: Reflector
  ) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const isPublic = this.reflector.getAllAndOverride<boolean>(IS_PUBLIC_KEY, [
      context.getHandler(),
      context.getClass()
    ]);
    const req = context.switchToHttp().getRequest() as Request;
    const token = this.extractTokenFromHeader(req, isPublic);

    if (isPublic && !token) return true;
    if (!isPublic && !token) throw new UnauthorizedException();

    try {
      req['session'] = await this.tokenService.validateAccessToken(token);

      return true;
    } catch (e) {
      if (isPublic) return true;

      throw new UnauthorizedException();
    }
  }

  private extractTokenFromHeader(request: Request, isPublic: boolean): string | undefined {
    if (isPublic && !request.headers.authorization) return '';
    if (!isPublic && !request.headers.authorization) throw new UnauthorizedException();

    const [type, token] = request.headers.authorization.split(' ') ?? [];

    return type === 'Bearer' ? token : undefined;
  }
}
