import { Controller, Post, Body } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UserService) {}

  @Post('register')
  async registerUser(@Body() userData: any): Promise<string> {
    const result = await this.usersService.register(userData);
    return result;
  }
}
