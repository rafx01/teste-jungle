import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Task } from 'src/entities/task.entity';
import { Repository } from 'typeorm';
import { SearchFilterDto } from './dto/search-filter.dto';
import { CreateTaskDto } from './dto/create-task.dto';

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
      orderBy = 'createdAt',
    } = filters;

    const skip = (page - 1) * limit;

    const [tasks, total] = await this.taskRepository.findAndCount({
      order: {
        [orderBy]: order,
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

  async createTask(createTaskDto: CreateTaskDto): Promise<Task> {
    const newTask = this.taskRepository.create(createTaskDto);
    return await this.taskRepository.save(newTask);
  }
}
