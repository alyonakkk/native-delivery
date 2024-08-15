import { Body, Controller, HttpStatus, Patch } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';

import { SessionDto } from '@/auth/dto/session.dto';
import { ApiResponses } from '@/decorators/apiResponse.decorator';

import { Session } from '../decorators/session.decorator';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserDto } from './dto/user.dto';
import { UserService } from './user.service';

@ApiTags('user')
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Patch('profile')
  @ApiResponses([
    { status: HttpStatus.OK, type: UserDto },
    { status: HttpStatus.BAD_REQUEST },
    { status: HttpStatus.UNAUTHORIZED }
  ])
  @ApiBearerAuth()
  update(@Session() session: SessionDto, @Body() body: UpdateUserDto) {
    return this.userService.update(session.id, body);
  }
}
