import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AppService {
  constructor(private jwtService: JwtService) {}

  login(credential: { username: string; password: string }) {
    if (credential.username === 'admin' && credential.password === 'password') {
      const payload = {
        sub: '123',
        username: credential.username,
        role: 'admin',
      };
      const token = this.jwtService.sign(payload);
      return { access_token: token };
    }
    throw new UnauthorizedException('Invalid credentials');
  }
}
