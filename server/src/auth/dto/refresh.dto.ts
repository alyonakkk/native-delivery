import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class RefreshDto {
  @ApiProperty({ example: 'token', description: 'Refresh token' })
  @IsString({ message: 'Refresh token must be a string' })
  refreshToken: string;
}
