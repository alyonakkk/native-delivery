import { applyDecorators, HttpCode, HttpStatus } from '@nestjs/common';
import {
  ApiBadRequestResponse,
  ApiConflictResponse,
  ApiCreatedResponse,
  ApiForbiddenResponse,
  ApiInternalServerErrorResponse,
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiUnauthorizedResponse
} from '@nestjs/swagger';

import {
  BadRequestExceptionDto,
  ConflictExceptionDto,
  ForbiddenExceptionDto,
  NotFoundExceptionDto,
  ServerExceptionDto,
  UnauthorizedExceptionDto
} from '@/exceptions/dto/exceptions.dto';

interface IApiResponse {
  status: HttpStatus;
  description?: string;
  type?: unknown;
}

export const ApiResponses = (responses: IApiResponse[]) => {
  const currentResponses = [{ status: HttpStatus.INTERNAL_SERVER_ERROR }, ...responses];
  const apiResponses = currentResponses.reduce<(MethodDecorator | ClassDecorator)[]>((acc, response) => {
    const { status, description, type } = response;

    switch (status) {
      case HttpStatus.OK:
        acc.push(HttpCode(HttpStatus.OK));
        acc.push(
          ApiOkResponse({
            type: type ?? null,
            description: description ?? 'Success'
          })
        );
        return acc;
      case HttpStatus.CREATED:
        acc.push(
          ApiCreatedResponse({
            type: type ?? null,
            description: description ?? 'Created'
          })
        );
        return acc;
      case HttpStatus.BAD_REQUEST:
        acc.push(
          ApiBadRequestResponse({
            type: type ?? BadRequestExceptionDto,
            description: description ?? 'Field validation error'
          })
        );
        return acc;
      case HttpStatus.UNAUTHORIZED:
        acc.push(
          ApiUnauthorizedResponse({
            type: type ?? UnauthorizedExceptionDto,
            description: description ?? 'Authorization error'
          })
        );
        return acc;
      case HttpStatus.FORBIDDEN:
        acc.push(
          ApiForbiddenResponse({
            type: type ?? ForbiddenExceptionDto,
            description: description ?? 'Forbidden error'
          })
        );
        return acc;
      case HttpStatus.NOT_FOUND:
        acc.push(
          ApiNotFoundResponse({
            type: type ?? NotFoundExceptionDto,
            description: description ?? 'Not found error'
          })
        );
        return acc;
      case HttpStatus.CONFLICT:
        acc.push(
          ApiConflictResponse({
            type: type ?? ConflictExceptionDto,
            description: description ?? 'Conflict error'
          })
        );
        return acc;
      case HttpStatus.INTERNAL_SERVER_ERROR:
        acc.push(
          ApiInternalServerErrorResponse({
            type: type ?? ServerExceptionDto,
            description: description ?? 'Server error'
          })
        );
        return acc;
      default:
        return acc;
    }
  }, []);

  return applyDecorators(...apiResponses);
};
