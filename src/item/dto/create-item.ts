import { IsNotEmpty, Min } from 'class-validator';

export class CreateItemDto {
  @IsNotEmpty()
  name: string;
  @IsNotEmpty({ message: 'Quantity cannot be empty' })
  @Min(1, { message: 'Quantity should be greater than 0' })
  quantity: number;
  @IsNotEmpty()
  @Min(1, { message: 'Quantity should be greater than 0' })
  price: number;
  @IsNotEmpty()
  description: string;
}
