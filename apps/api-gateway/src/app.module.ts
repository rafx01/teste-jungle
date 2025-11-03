import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { AuthController } from './app/auth/auth.controller';
import { AuthModule } from './app/auth/auth.module';
import { TasksModule } from './app/tasks/tasks.module';

@Module({
  imports: [AuthModule, TasksModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
