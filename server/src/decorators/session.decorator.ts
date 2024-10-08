import { createParamDecorator, ExecutionContext } from '@nestjs/common';

export const Session = createParamDecorator((_, ctx: ExecutionContext) => ctx.switchToHttp().getRequest()?.session);
