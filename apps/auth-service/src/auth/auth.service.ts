import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from 'src/users/users.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async login(user: any) {
    // garantir que o usuário está completo (por exemplo, se veio do validateUser)
    const fullUser = await this.usersService.findByEmail(user.email);

    if (!fullUser) {
      throw new UnauthorizedException('Usuário não encontrado');
    }

    const payload = { sub: fullUser.id, email: fullUser.email };

    return {
      access_token: this.jwtService.sign(payload),
      user: {
        id: fullUser.id,
        email: fullUser.email,
        nick: fullUser.nick,
        name: fullUser.name,
      },
    };
  }

  async register(email: string, password: string, name: string, nick: string) {
    const user = await this.usersService.create(email, password, name, nick);

    return this.login(user); // agora o user tem id e email
  }

  async validateUser(email: string, password: string): Promise<any> {
    const user = await this.usersService.findByEmail(email);

    if (user && (await bcrypt.compare(password, user.password))) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }
}
