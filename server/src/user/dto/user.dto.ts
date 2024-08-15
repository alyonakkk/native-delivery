import { ApiProperty } from '@nestjs/swagger';

export class UserDto {
  @ApiProperty({ example: 1, description: 'User ID' })
  id: number;

  @ApiProperty({ example: 'Alyona', description: 'Name' })
  name: string;

  @ApiProperty({ example: 'example@gmail.com', description: 'Email' })
  email: string;

  @ApiProperty({ example: '/uploads/avatar.png', description: 'Photo source' })
  photo: string;
}
