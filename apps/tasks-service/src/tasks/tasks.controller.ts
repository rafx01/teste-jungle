import { Body, Controller, Get, Post, Query, Res, Param } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { SearchFilterDto } from './dto/search-filter.dto';
import { CreateTaskDto } from './dto/create-task.dto';
import { GetTaskByIdDto } from './dto/get-task-by-id.dto';

@Controller('tasks')
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}

  @Get()
  async getAllTasks(@Query() query: SearchFilterDto) {
    return await this.tasksService.getAllTasks(query);
  }

  @Get(':id')
  async getTask(@Param() params: GetTaskByIdDto) {
    return await this.tasksService.getTaskById(params.id);
  }

  @Post()
  createTask(@Body() createTaskDto: CreateTaskDto) {
    return this.tasksService.createTask(createTaskDto);
  }
}
