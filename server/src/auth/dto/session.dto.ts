import { ApiProperty } from '@nestjs/swagger';

export class SessionDto {
  @ApiProperty({ example: 1, description: 'User ID' })
  id: number;

  @ApiProperty({ example: 'example@gmail.com', description: 'Email' })
  email: string;
}
