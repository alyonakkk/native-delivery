import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsString, Length } from 'class-validator';

import { UserDto } from '@/user/dto/user.dto';

import { TokensDto } from './tokens.dto';

export class LogInDto {
  @ApiProperty({ example: 'example@gmail.com', description: 'Email' })
  @IsEmail({}, { message: 'Invalid email format' })
  email: string;

  @ApiProperty({ example: 'example1234', description: 'Password' })
  @IsString({ message: 'Password must be a string' })
  @Length(4, 16, {
    message: 'Password length must be at least 4 and no more than 16 characters'
  })
  password: string;
}

export class LoggedInDto {
  @ApiProperty({ example: UserDto, description: 'User data' })
  user: UserDto;

  @ApiProperty({ example: TokensDto, description: 'Token data' })
  tokens: TokensDto;
}
