import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { UserEntity } from 'src/user/entity/user.entity';
import { ItemEntity } from 'src/item/entity/item.entity';
import { InvoiceStatus } from '../invoice.enum';

@Entity('invoice')
export class InvoiceEntity {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ type: 'enum', enum: InvoiceStatus, default: InvoiceStatus.Placed })
  status: InvoiceStatus;
  @Column('json')
  items: ItemEntity[];
  @Column()
  totalAmount: number;
  @ManyToOne(() => UserEntity, (user) => user.invoices)
  @JoinColumn()
  user: UserEntity;
}
