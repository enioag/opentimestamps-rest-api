import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
      .setTitle('OpenTimestamps REST API')
      .setDescription('API for creating and validating document hashes')
      .setVersion('1.0')
      .addTag('OTS')
      .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  let httpPort = 3000;

  if (process.env.PORT) {
    console.log('Use HTTP-Port from environment variable PORT: ' + process.env.PORT);
    httpPort = +process.env.PORT;
  } else {
    console.log('Use default HTTP-Port 3000 as environment variable PORT is not set');
  }
  
  await app.listen(httpPort);
}
bootstrap();
