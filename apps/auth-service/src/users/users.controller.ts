import { Controller, Get, Query } from '@nestjs/common';
import { GetUsersDto } from './dto/get-users.dto';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Get()
  async getAllUsers(@Query() query: GetUsersDto) {
    return await this.usersService.findAll();
  }
}
