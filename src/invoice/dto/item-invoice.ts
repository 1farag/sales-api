import { IsNotEmpty } from 'class-validator';

export class ItemInvoiceDto {
  @IsNotEmpty()
  id: number;
  @IsNotEmpty()
  quantity: number;
}
