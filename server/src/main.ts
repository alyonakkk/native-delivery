import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

import { AppModule } from './app.module';

const { SERVER_PORT, CLIENT_HOST } = process.env;

const CURRENT_SERVER_PORT = SERVER_PORT || 3005;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors({ credentials: true, origin: [CLIENT_HOST] });
  app.setGlobalPrefix('/api');

  const config = new DocumentBuilder()
    .setTitle('Delivery API')
    .setDescription('Documentation api')
    .setVersion('1.0.0')
    .addBearerAuth()
    .build();
  const document = SwaggerModule.createDocument(app, config);

  SwaggerModule.setup('/api/docs', app, document);

  await app.listen(CURRENT_SERVER_PORT, () => {
    console.log('==================================================================');
    console.log(`🚀 Server listening on the port ${CURRENT_SERVER_PORT}`);
    console.log('==================================================================');
  });
}

bootstrap();
