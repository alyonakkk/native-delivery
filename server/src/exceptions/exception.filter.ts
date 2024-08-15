import { ArgumentsHost, Catch, ExceptionFilter, HttpException } from '@nestjs/common';
import { Response } from 'express';

const EXCEPTION_DEFAULT_MESSAGES = {
  401: 'Authorization error',
  403: 'Forbidden error',
  500: 'Server error'
};

@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const status = exception.getStatus();
    const message = exception.message;
    const errors = (exception.getResponse() as unknown)?.errors;

    if (errors) {
      response.status(status).json({
        status,
        errors
      });
    } else {
      response.status(status).json({
        status,
        message: EXCEPTION_DEFAULT_MESSAGES[status] ?? message ?? 'Произошла ошибка'
      });
    }
  }
}
