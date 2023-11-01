import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from './entity/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private userRepository: Repository<UserEntity>,
  ) {}

  async createUser(user: any): Promise<any> {
    const newUser = this.userRepository.create(user);
    await this.userRepository.save(newUser);
    return newUser;
  }

  async getAllUsers(): Promise<any> {
    return await this.userRepository.find();
  }

  async getUserById(id: number): Promise<any> {
    const user = await this.userRepository.findOne({
      where: { id },
      relations: ['invoices'],
    });

    if (!user) throw new NotFoundException('User does not exist!');

    return user;
  }
  async updateUser(id: number, user: any): Promise<any> {
    return await this.userRepository.update({ id }, user);
  }
  async deleteUser(id: number): Promise<any> {
    return await this.userRepository.delete(id);
  }
}
