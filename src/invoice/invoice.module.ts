import { Module } from '@nestjs/common';
import { InvoiceService } from './invoice.service';
import { InvoiceController } from './invoice.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { InvoiceEntity } from './entity/invoice.entity';
import { ItemModule } from 'src/item/item.module';

@Module({
  imports: [TypeOrmModule.forFeature([InvoiceEntity]), ItemModule],
  providers: [InvoiceService],
  controllers: [InvoiceController],
})
export class InvoiceModule {}
