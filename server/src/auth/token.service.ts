import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class TokenService {
  constructor(private jwtService: JwtService) {}

  async generateTokens(userId: number, email: string) {
    const payload = { id: userId, email };
    const [accessToken, refreshToken] = await Promise.all([
      this.jwtService.signAsync(payload, {
        secret: process.env.JWT_ACCESS_SECRET,
        expiresIn: '30m'
      }),
      this.jwtService.signAsync(payload, {
        secret: process.env.JWT_REFRESH_SECRET,
        expiresIn: '7d'
      })
    ]);

    return {
      accessToken,
      refreshToken
    };
  }

  async validateAccessToken(accessToken) {
    return await this.jwtService.verifyAsync(accessToken, {
      secret: process.env.JWT_ACCESS_SECRET
    });
  }

  async validateRefreshToken(refreshToken) {
    return await this.jwtService.verifyAsync(refreshToken, {
      secret: process.env.JWT_REFRESH_SECRET
    });
  }
}
