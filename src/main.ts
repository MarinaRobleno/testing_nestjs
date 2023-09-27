import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { AppModule } from './app.module';
import { setupSwagger } from 'swagger.config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      transform: true, // Automatically transform request payloads to DTO instances
      disableErrorMessages: false, // Enable error messages in the response
    }),
  );
  setupSwagger(app);
  await app.listen(3000);
}
bootstrap();
