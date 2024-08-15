import { ArgumentMetadata, BadRequestException, Injectable, PipeTransform } from '@nestjs/common';
import { plainToClass } from 'class-transformer';
import { validate } from 'class-validator';

@Injectable()
export class ValidationPipe implements PipeTransform<unknown> {
  async transform(value: unknown, metadata: ArgumentMetadata): Promise<unknown> {
    const obj = metadata?.metatype ? plainToClass(metadata.metatype, value) : undefined;

    if (!obj) return;
    if (metadata.type !== 'body') return obj;

    const errors = await validate(obj);

    if (errors.length) {
      const resp = errors.reduce((acc, error) => {
        return {
          ...acc,
          [error.property]: error?.constraints ? Object.values(error.constraints).map((error) => error)[0] : undefined
        };
      }, {});

      throw new BadRequestException({ errors: resp });
    }

    return obj;
  }
}
