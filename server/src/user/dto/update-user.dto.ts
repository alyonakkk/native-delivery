import { ApiProperty, PartialType } from '@nestjs/swagger';
import { IsOptional, IsString, Length } from 'class-validator';

import { UserDto } from './user.dto';

export class UpdateUserDto extends PartialType(UserDto) {
  @ApiProperty({ example: 'example1234', description: 'Old password', required: false })
  @IsOptional()
  @IsString({ message: 'Password must be a string' })
  @Length(4, 16, {
    message: 'Password length must be at least 4 and no more than 16 characters'
  })
  oldPassword?: string;

  @ApiProperty({ example: 'example1234', description: 'New password', required: false })
  @IsOptional()
  @IsString({ message: 'Password must be a string' })
  @Length(4, 16, {
    message: 'Password length must be at least 4 and no more than 16 characters'
  })
  newPassword?: string;

  @ApiProperty({ example: 'example1234', description: 'New password confirm', required: false })
  @IsOptional()
  @IsString({ message: 'Password must be a string' })
  @Length(4, 16, {
    message: 'Password length must be at least 4 and no more than 16 characters'
  })
  newPasswordConfirm?: string;
}
