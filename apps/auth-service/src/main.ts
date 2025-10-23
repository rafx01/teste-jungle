import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { Logger } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    AppModule,
    {
      transport: Transport.RMQ,
      options: {
        urls: ['amqp://localhost:5672'],
        queue: 'nome_da_sua_fila',
        queueOptions: {
          durable: false,
        },
      },
    },
  );

  await app.listen();
  Logger.log('Microservice rodando com RabbitMQ');
}
bootstrap();
