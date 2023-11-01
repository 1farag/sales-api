import {
  Controller,
  Post,
  Get,
  Param,
  Body,
  HttpException,
  Put,
  Delete,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user';
import { UserEntity } from './entity/user.entity';
import { UpdateUserDto } from './dto/update-user';

@Controller('users')
export class UserController {
  constructor(private userService: UserService) {}

  @Post()
  async createUser(@Body() user: CreateUserDto): Promise<UserEntity> {
    try {
      return await this.userService.createUser(user);
    } catch (e) {
      throw new HttpException(e.message, e.status);
    }
  }

  @Get()
  async getAllUsers(): Promise<UserEntity[]> {
    try {
      return await this.userService.getAllUsers();
    } catch (e) {
      throw new HttpException(e.message, e.status);
    }
  }

  @Get(':id')
  async getUserById(@Param('id') id: number): Promise<UserEntity> {
    try {
      return await this.userService.getUserById(id);
    } catch (e) {
      throw new HttpException(e.message, e.status);
    }
  }

  @Put(':id')
  async updateUser(
    @Param('id') id: number,
    @Body() user: UpdateUserDto,
  ): Promise<object> {
    try {
      await this.userService.updateUser(id, user);
      return {
        message: 'User has been successfully updated',
      };
    } catch (e) {
      throw new HttpException(e.message, e.status);
    }
  }
  @Delete(':id')
  async deleteUser(@Param('id') id: number): Promise<object> {
    try {
      await this.userService.deleteUser(id);
      return {
        message: 'User has been successfully deleted',
      };
    } catch (e) {
      throw new HttpException(e.message, e.status);
    }
  }
}
