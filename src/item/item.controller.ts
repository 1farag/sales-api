import {
  Body,
  Controller,
  Delete,
  Get,
  HttpException,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ItemService } from './item.service';
import { UpdateItemDto } from './dto/update-item';
import { CreateItemDto } from './dto/create-item';
import { ItemEntity } from './entity/item.entity';

@Controller('items')
export class ItemController {
  constructor(private itemService: ItemService) {}
  @Post()
  async createItem(@Body() item: CreateItemDto): Promise<ItemEntity> {
    try {
      return await this.itemService.createItem(item);
    } catch (e) {
      throw new HttpException(e.message, e.status);
    }
  }
  @Get()
  async getAllItems(): Promise<ItemEntity[]> {
    try {
      return await this.itemService.getAllItems();
    } catch (e) {
      throw new HttpException(e.message, e.status);
    }
  }
  @Get(':id')
  async getItemById(@Param('id') id: number): Promise<ItemEntity> {
    try {
      return await this.itemService.getItemById(id);
    } catch (e) {
      throw new HttpException(e.message, e.status);
    }
  }
  @Put(':id')
  async updateItem(
    @Param('id') id: number,
    @Body() item: UpdateItemDto,
  ): Promise<object> {
    try {
      await this.itemService.updateItem(id, item);
      return {
        message: 'Item has been successfully updated',
      };
    } catch (e) {
      throw new HttpException(e.message, e.status);
    }
  }
  @Delete(':id')
  async deleteItem(@Param('id') id: number): Promise<object> {
    try {
      await this.itemService.deleteItem(id);
      return {
        message: 'Item has been successfully deleted',
      };
    } catch (e) {
      throw new HttpException(e.message, e.status);
    }
  }
}
