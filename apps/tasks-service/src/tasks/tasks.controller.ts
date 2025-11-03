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
  Inject,
} from '@nestjs/common';
import { TasksService } from './tasks.service';
import { SearchFilterDto } from './dto/search-filter.dto';
import { CreateTaskDto } from './dto/create-task.dto';
import { GetTaskByIdDto } from './dto/get-task-by-id.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { ClientProxy } from '@nestjs/microservices';

@Controller('tasks')
export class TasksController {
  constructor(
    private readonly tasksService: TasksService,
    @Inject('TASK_SERVICE') private readonly client: ClientProxy,
  ) {}

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
    this.client.emit('task_created', createTaskDto);
    return this.tasksService.createTask(createTaskDto);
  }

  @Put(':id')
  updateTask(@Param('id') id: string, @Body() updateTaskDto: UpdateTaskDto) {
    return this.tasksService.updateTask(updateTaskDto, id);
  }
}
