import { HttpStatus } from '@nestjs/common';
import { ApiProperty } from '@nestjs/swagger';
import { IsEnum } from 'class-validator';

export class BadRequestExceptionDto {
  @IsEnum(HttpStatus)
  @ApiProperty({ example: 400, description: 'Status code' })
  status: HttpStatus;

  @ApiProperty({
    example: [{ phone: ['Invalid phone number'] }],
    description: 'Message'
  })
  errors: {
    [key: string]: string;
  }[];
}

export class UnauthorizedExceptionDto {
  @IsEnum(HttpStatus)
  @ApiProperty({ example: 401, description: 'Status code' })
  status: HttpStatus;

  @ApiProperty({ example: 'Authorization error', description: 'Message' })
  message: string;
}

export class ForbiddenExceptionDto {
  @IsEnum(HttpStatus)
  @ApiProperty({ example: 403, description: 'Status code' })
  status: HttpStatus;

  @ApiProperty({ example: 'Forbidden error', description: 'Message' })
  message: string;
}

export class NotFoundExceptionDto {
  @IsEnum(HttpStatus)
  @ApiProperty({ example: 404, description: 'Status code' })
  status: HttpStatus;

  @ApiProperty({ example: 'Not found error', description: 'Message' })
  message: string;
}

export class ConflictExceptionDto {
  @IsEnum(HttpStatus)
  @ApiProperty({ example: 409, description: 'Status code' })
  status: HttpStatus;

  @ApiProperty({ example: 'Conflict error', description: 'Message' })
  message: string;
}

export class ServerExceptionDto {
  @IsEnum(HttpStatus)
  @ApiProperty({ example: 500, description: 'Status code' })
  status: HttpStatus;

  @ApiProperty({ example: 'Server error', description: 'Message' })
  message: string;
}
