import { Module } from '@nestjs/common';
import { TasksController } from './tasks.controller';
import { TasksService } from './tasks.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Task } from '../entities/task.entity';
import { TaskAssignment } from '../entities/task-assignment.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Task, TaskAssignment])],
  controllers: [TasksController],
  providers: [TasksService],
})
export class TasksModule {}
