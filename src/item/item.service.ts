import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ItemEntity } from './entity/item.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ItemService {
  constructor(
    @InjectRepository(ItemEntity)
    private readonly itemRepository: Repository<ItemEntity>,
  ) {}

  async getAllItems(): Promise<any> {
    return await this.itemRepository.find();
  }

  async getItemById(id: number): Promise<any> {
    const item = await this.itemRepository.findOne({ where: { id } });
    if (!item) throw new NotFoundException('Item does not exist!');
    return item;
  }

  async createItem(item: any): Promise<any> {
    const newItem = this.itemRepository.create(item);
    await this.itemRepository.save(newItem);
    return newItem;
  }

  async updateItem(id: number, item: any): Promise<void> {
    await this.itemRepository.update({ id }, item);
  }

  async deleteItem(id: number): Promise<any> {
    return await this.itemRepository.delete(id);
  }
}
