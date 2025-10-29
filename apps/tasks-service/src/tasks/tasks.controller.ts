import { Controller, Get, Post, Query, Res } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { Task } from 'src/entities/task.entity';
import { SearchFilterDto } from './dto/search-filter.dto';

@Controller('tasks')
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}

  @Get()
  getAllTasks(@Res() response, @Query() query: SearchFilterDto) {
    return response.status(200).json(this.tasksService.getAllTasks(query));
  }

  @Post()
  createTask(task: Task) {
    return this.tasksService.createTask(task);
  }
}
