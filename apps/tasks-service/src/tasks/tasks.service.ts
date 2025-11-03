import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Task } from 'src/entities/task.entity';
import { Repository } from 'typeorm';
import { SearchFilterDto } from './dto/search-filter.dto';
import { CreateTaskDto } from './dto/create-task.dto';
import { DeleteTaskByIdDto } from './dto/delete-task-by-id.dto';
import { GetTaskByIdDto } from './dto/get-task-by-id.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { ILike } from 'typeorm';
import { TaskAssignment } from 'src/entities/task-assignment.entity';
@Injectable()
export class TasksService {
  constructor(
    @InjectRepository(Task)
    private readonly taskRepository: Repository<Task>,

    @InjectRepository(TaskAssignment)
    private readonly taskAssignmentRepository: Repository<TaskAssignment>,
  ) {}

  async getAllTasks(filters: SearchFilterDto) {
    const {
      page = 1,
      limit = 10,
      order = 'DESC',
      orderByStatus = 'ALL',
      title,
    } = filters;

    const skip = (page - 1) * limit;
    const [tasks, total] = await this.taskRepository.findAndCount({
      where: {
        status: orderByStatus === 'ALL' ? undefined : orderByStatus,
        ...(title ? { title: ILike(`%${title}%`) } : {}),
      },
      order: {
        createdAt: order,
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
    const task = await this.taskRepository.findOne({
      where: { id: getTaskByIdDto.id },
      relations: ['assignments'],
    });

    return task;
  }

  async deleteTaskById(deleteTaskByIdDto: DeleteTaskByIdDto) {
    return await this.taskRepository.delete(deleteTaskByIdDto.id);
  }

  async createTask(dto: CreateTaskDto) {
    const task = this.taskRepository.create({
      title: dto.title,
      description: dto.description,
      priority: dto.priority,
      status: dto.status,
      dueDate: new Date(dto.dueDate),
    });

    const savedTask = await this.taskRepository.save(task);

    if (dto.users?.length) {
      const assignments = dto.users.map((userId) =>
        this.taskAssignmentRepository.create({
          task_id: savedTask.id,
          user_id: userId,
        }),
      );

      await this.taskAssignmentRepository.save(assignments);
    }

    return savedTask;
  }

  async updateTask(updateTaskDto: UpdateTaskDto, id: string) {
    this.taskRepository.update(id, updateTaskDto);

    return await this.taskRepository.save({
      id,
      title: updateTaskDto.title,
      description: updateTaskDto.description,
      dueDate: updateTaskDto.dueDate,
      priority: updateTaskDto.priority,
      status: updateTaskDto.status,
      //users: updateTaskDto.users,
    });
  }
}
