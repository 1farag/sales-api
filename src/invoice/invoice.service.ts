import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { InvoiceEntity } from './entity/invoice.entity';
import { Repository } from 'typeorm';
import { ItemService } from 'src/item/item.service';

@Injectable()
export class InvoiceService {
  constructor(
    @InjectRepository(InvoiceEntity)
    private readonly invoiceRepository: Repository<InvoiceEntity>,
    private readonly itemService: ItemService,
  ) {}

  async createInvoice(invoice: any): Promise<any> {
    let totalAmount = 0;

    const items = await Promise.all(
      invoice.items.map(async (item) => {
        let newItem = await this.itemService.getItemById(item.id);
        newItem.quantity = item.quantity;
        totalAmount += newItem.price * item.quantity;
        return newItem;
      }),
    );

    invoice.items = items;
    invoice.totalAmount = totalAmount;

    const newInvoice = this.invoiceRepository.create(invoice);
    await this.invoiceRepository.save(newInvoice);

    return newInvoice;
  }
  async getAllInvoices(): Promise<any> {
    return await this.invoiceRepository.find();
  }
  async getInvoiceById(id: number): Promise<any> {
    const invoice = await this.invoiceRepository.findOne({ where: { id } });
    if (!invoice) throw new NotFoundException('Invoice does not exist!');
    return invoice;
  }
  async updateInvoice(id: number, invoice: any): Promise<any> {
    return await this.invoiceRepository.update({ id }, invoice);
  }
  async deleteInvoice(id: number): Promise<any> {
    return await this.invoiceRepository.delete(id);
  }
}
