// apps/api-gateway/src/tasks/tasks.service.ts
import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class TasksService {
  constructor(private readonly httpService: HttpService) {}

  async getAllTasks(query: any) {
    const response = await firstValueFrom(
      this.httpService.get(`${process.env.TASKS_SERVICE_URL}/tasks`, {
        params: query,
      }),
    );
    return response.data;
  }

  async getTaskById(id: string) {
    const response = await firstValueFrom(
      this.httpService.get(`${process.env.TASKS_SERVICE_URL}/tasks/${id}`),
    );
    return response.data;
  }

  async createTask(createTaskDto: any) {
    const response = await firstValueFrom(
      this.httpService.post(
        `${process.env.TASKS_SERVICE_URL}/tasks`,
        createTaskDto,
      ),
    );
    return response.data;
  }

  async updateTask(id: string, updateTaskDto: any) {
    const response = await firstValueFrom(
      this.httpService.put(
        `${process.env.TASKS_SERVICE_URL}/tasks/${id}`,
        updateTaskDto,
      ),
    );
    return response.data;
  }

  async deleteTask(id: string) {
    const response = await firstValueFrom(
      this.httpService.delete(`${process.env.TASKS_SERVICE_URL}/tasks/${id}`),
    );
    return response.data;
  }
}
