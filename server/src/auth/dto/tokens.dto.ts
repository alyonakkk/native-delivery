import { ApiProperty } from '@nestjs/swagger';

export class TokensDto {
  @ApiProperty({ example: 'asd', description: 'Access token' })
  accessToken: string;

  @ApiProperty({ example: 'asd', description: 'Refresh token' })
  refreshToken: string;
}
