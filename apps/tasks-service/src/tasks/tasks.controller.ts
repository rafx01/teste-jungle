import {
  Body,
  Controller,
  Get,
  Post,
  Query,
  Res,
  Param,
  Delete,
  Put,
} from '@nestjs/common';
import { TasksService } from './tasks.service';
import { SearchFilterDto } from './dto/search-filter.dto';
import { CreateTaskDto } from './dto/create-task.dto';
import { GetTaskByIdDto } from './dto/get-task-by-id.dto';
import { UpdateTaskDto } from './dto/update-task.dto';

@Controller('tasks')
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}

  @Get()
  async getAllTasks(@Query() query: SearchFilterDto) {
    return await this.tasksService.getAllTasks(query);
  }

  @Get(':id')
  async getTask(@Param() params: GetTaskByIdDto) {
    return await this.tasksService.getTaskById({
      id: params.id,
    });
  }

  @Delete(':id')
  async deleteTask(@Param() params: GetTaskByIdDto) {
    return await this.tasksService.deleteTaskById({
      id: params.id,
    });
  }

  @Post()
  createTask(@Body() createTaskDto: CreateTaskDto) {
    return this.tasksService.createTask(createTaskDto);
  }

  // @Put(':id')
  // updateTask(@Param('id') id: string, @Body() updateTaskDto: UpdateTaskDto) {
  //   return this.tasksService.updateTask(updateTaskDto, id);
  // }
}
