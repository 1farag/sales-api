import { PartialType } from '@nestjs/mapped-types';
import { CreateItemDto } from './create-item';
export class UpdateItemDto extends PartialType(CreateItemDto) {}
