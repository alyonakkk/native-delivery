import { Body, Controller, HttpStatus, Post, Res } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { Response } from 'express';

import { ApiResponses } from '@/decorators/apiResponse.decorator';
import { Public } from '@/decorators/public.decorator';

import { AuthService } from './auth.service';
import { LoggedInDto, LogInDto } from './dto/log-in.dto';
import { RefreshDto } from './dto/refresh.dto';
import { SignUpDto } from './dto/sign-up.dto';
import { TokensDto } from './dto/tokens.dto';

@ApiTags('auth')
@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('sign-up')
  @ApiResponses([{ status: HttpStatus.CREATED }, { status: HttpStatus.BAD_REQUEST }, { status: HttpStatus.CONFLICT }])
  @Public()
  async signUp(@Res({ passthrough: true }) res: Response, @Body() body: SignUpDto) {
    return await this.authService.signUp(body);
  }

  @Post('login')
  @ApiResponses([
    { status: HttpStatus.OK, type: LoggedInDto },
    { status: HttpStatus.BAD_REQUEST },
    { status: HttpStatus.NOT_FOUND },
    { status: HttpStatus.UNPROCESSABLE_ENTITY }
  ])
  @Public()
  async login(@Res({ passthrough: true }) res: Response, @Body() body: LogInDto) {
    return await this.authService.login(body);
  }

  @Post('refresh')
  @ApiResponses([
    { status: HttpStatus.OK, type: TokensDto },
    { status: HttpStatus.BAD_REQUEST },
    { status: HttpStatus.UNAUTHORIZED }
  ])
  @ApiBearerAuth()
  refresh(@Body() body: RefreshDto) {
    return this.authService.refresh(body);
  }
}
