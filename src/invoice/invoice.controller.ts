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
import { InvoiceService } from './invoice.service';
import { InvoiceEntity } from './entity/invoice.entity';
import { CreateInvoiceDto } from './dto/create-invoice';
import { updateInvoiceDto } from './dto/update-invoice';

@Controller('invoices')
export class InvoiceController {
  constructor(private invoiceService: InvoiceService) {}

  @Post()
  async createInvoice(
    @Body() invoice: CreateInvoiceDto,
  ): Promise<InvoiceEntity> {
    try {
      return await this.invoiceService.createInvoice(invoice);
    } catch (e) {
      throw new HttpException(e.message, e.status);
    }
  }
  @Get()
  async getAllInvoices(): Promise<InvoiceEntity[]> {
    try {
      return await this.invoiceService.getAllInvoices();
    } catch (e) {
      throw new HttpException(e.message, e.status);
    }
  }
  @Get(':id')
  async getInvoiceById(@Param('id') id: number): Promise<any> {
    try {
      const invoice = await this.invoiceService.getInvoiceById(id);
      return invoice;
    } catch (e) {
      throw new HttpException(e.message, e.status);
    }
  }
  @Put(':id')
  async updateInvoice(
    @Param('id') id: number,
    @Body() invoice: updateInvoiceDto,
  ): Promise<object> {
    try {
      await this.invoiceService.updateInvoice(id, invoice);
      return {
        message: 'Invoice has been successfully updated',
      };
    } catch (e) {
      throw new HttpException(e.message, e.status);
    }
  }
  @Delete(':id')
  async deleteInvoice(@Param('id') id: number): Promise<object> {
    try {
      return await this.invoiceService.deleteInvoice(id);
    } catch (e) {
      throw new HttpException(e.message, e.status);
    }
  }
}
