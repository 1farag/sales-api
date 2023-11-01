import { InvoiceEntity } from 'src/invoice/entity/invoice.entity';
import { Column, Entity, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

@Entity('user')
export class UserEntity {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  username: string;
  @Column({ unique: true })
  email: string;
  @OneToMany(() => InvoiceEntity, (invoice) => invoice.user)
  invoices: InvoiceEntity[];
}
