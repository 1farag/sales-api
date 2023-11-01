import { PartialType } from '@nestjs/mapped-types';
import { CreateInvoiceDto } from './create-invoice';
import { IsOptional, IsEnum } from 'class-validator';
import { InvoiceStatus } from '../invoice.enum';

export class updateInvoiceDto extends PartialType(CreateInvoiceDto) {
  @IsOptional()
  @IsEnum(InvoiceStatus)
  status: InvoiceStatus;
}
