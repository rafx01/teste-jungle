import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Task } from 'src/entities/task.entity';
import { Repository } from 'typeorm';
import { SearchFilterDto } from './dto/search-filter.dto';
import { CreateTaskDto } from './dto/create-task.dto';
import { DeleteTaskByIdDto } from './dto/delete-task-by-id.dto';
import { GetTaskByIdDto } from './dto/get-task-by-id.dto';
import { UpdateTaskDto } from './dto/update-task.dto';

@Injectable()
export class TasksService {
  constructor(
    @InjectRepository(Task)
    private readonly taskRepository: Repository<Task>,
  ) {}

  async getAllTasks(filters: SearchFilterDto) {
    const {
      page = 1,
      limit = 10,
      order = 'DESC',
      orderByStatus = 'ALL',
    } = filters;

    const skip = (page - 1) * limit;

    const [tasks, total] = await this.taskRepository.findAndCount({
      order: {
        [orderByStatus]: order,
      },
      take: limit,
      skip: skip,
    });

    return {
      data: tasks,
      meta: {
        total,
        page,
        limit,
        totalPages: Math.ceil(total / limit),
      },
    };
  }

  async getTaskById(getTaskByIdDto: GetTaskByIdDto) {
    const task = await this.taskRepository.findOneBy({ id: getTaskByIdDto.id });

    return task;
  }

  async deleteTaskById(deleteTaskByIdDto: DeleteTaskByIdDto) {
    return await this.taskRepository.delete(deleteTaskByIdDto.id);
  }

  async createTask(createTaskDto: CreateTaskDto): Promise<Task> {
    const newTask = this.taskRepository.create(createTaskDto);
    return await this.taskRepository.save(newTask);
  }

  // async updateTask(updateTaskDto: UpdateTaskDto, id: string) {
  //   this.taskRepository.update(id, updateTaskDto);

  //   return await this.taskRepository.save({
  //     id,
  //     title: updateTaskDto.title,
  //     description: updateTaskDto.description,
  //     dueDate: updateTaskDto.dueDate,
  //     priority: updateTaskDto.priority,
  //     status: updateTaskDto.status,
  //     users: updateTaskDto.users,
  //   });
  // }
}
