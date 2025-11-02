import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { AuthController } from './app/auth/auth.controller';
import { AuthModule } from './app/auth/auth.module';
import { TasksModule } from './app/tasks/tasks.module';

@Module({
  imports: [
    AuthModule,
    TasksModule,
    // ClientsModule.register([
    //   {
    //     name: 'AUTH_SERVICE',
    //     transport: Transport.RMQ,
    //     options: {
    //       urls: ['amqp://localhost:5672'],
    //       queue: 'auth_queue',
    //     },
    //   },
    // ]),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
