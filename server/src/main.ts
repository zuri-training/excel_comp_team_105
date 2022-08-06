import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import {
  DocumentBuilder,
  SwaggerCustomOptions,
  SwaggerDocumentOptions,
  SwaggerModule,
} from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const config = new DocumentBuilder()
    .setTitle('Excel Project')
    .setDescription('REST API for Zuri Excel Project')
    .setVersion('v1')
    .addTag('excel')
    .build();

  const docs = SwaggerModule.createDocument(app, config);

  const customOptions: SwaggerCustomOptions = {
    customSiteTitle: 'Excel Project API Docs',
  };

  SwaggerModule.setup('api', app, docs, customOptions);

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const options: SwaggerDocumentOptions = {
    deepScanRoutes: true,
  };
  app.useGlobalPipes(new ValidationPipe());
  await app.listen(8000);
}
bootstrap();
