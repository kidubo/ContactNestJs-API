import { Injectable } from '@nestjs/common';
import { CreateItemDto } from './dto/create-item.dto';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Item } from './interfaces/items.interfaces';

@Injectable()
export class ItemsService {
  constructor(@InjectModel('Items') private readonly itemModel: Model<Item>) {}

  async findAll(): Promise<Item[]> {
    const items = await this.itemModel.find().exec();
    return items;
  }

  async findOne(id: string): Promise<Item> {
    return await this.itemModel.findOne({ _id: id });
  }

  async create(item: Item): Promise<Item> {
    const newItem = new this.itemModel(item);
    return await newItem.save();
  }

  async delete(id: string): Promise<Item> {
    return await this.itemModel.findByIdAndRemove(id);
  }
}
