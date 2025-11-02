import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class AuthService {
  constructor(private readonly httpService: HttpService) {}

  async login(loginDto: { email: string; password: string }) {
    const response = await firstValueFrom(
      this.httpService.post(
        `${process.env.AUTH_SERVICE_URL}/auth/login`,
        loginDto,
      ),
    );
    return response.data;
  }

  async register(registerDto: any) {
    const response = await firstValueFrom(
      this.httpService.post(
        `${process.env.AUTH_SERVICE_URL}/auth/register`,
        registerDto,
      ),
    );
    return response.data;
  }
}
