import { Body, Controller, Get, Post, Query, Res } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { SearchFilterDto } from './dto/search-filter.dto';
import { CreateTaskDto } from './dto/create-task.dto';

@Controller('tasks')
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}

  @Get()
  async getAllTasks(@Query() query: SearchFilterDto) {
    return await this.tasksService.getAllTasks(query);
  }

  @Post()
  createTask(@Body() createTaskDto: CreateTaskDto) {
    return this.tasksService.createTask(createTaskDto);
  }
}
