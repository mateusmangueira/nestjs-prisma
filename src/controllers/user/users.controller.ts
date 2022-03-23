import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Patch,
} from '@nestjs/common';
import { UsersService } from '../../services/user/users.service';
import { User as UserModel } from '@prisma/client';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) { }

  @Post('create')
  async createUser(
    @Body() userData: { name: string; email: string; password: string },
  ): Promise<UserModel> {
    return this.usersService.createUser(userData);
  }

  @Get(':id')
  async getUserById(@Param('id') id: string): Promise<UserModel> {
    return this.usersService.user({ id: Number(id) });
  }

  @Get('')
  async getUsers() {
    return this.usersService.users({});
  }
  /*
  @Patch('update')
  async updateUser(@Param('id') id: string): Promise<UserModel> {
    return this.usersService.updateUser();
  }
  */

  @Delete(':id')
  async deleteUser(@Param('id') id: string): Promise<UserModel> {
    return this.usersService.deleteUser({ id: Number(id) });
  }
}
