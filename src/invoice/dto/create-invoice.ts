import { Type } from 'class-transformer';
import { IsNotEmpty } from 'class-validator';
import { ItemInvoiceDto } from './item-invoice';

export class CreateInvoiceDto {
  @IsNotEmpty()
  user: string;
  @IsNotEmpty()
  items: ItemInvoiceDto[];
}
