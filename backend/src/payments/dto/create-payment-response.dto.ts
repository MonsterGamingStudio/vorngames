import { ApiProperty } from '@nestjs/swagger';

export class CreatePaymentResponseDto {
  @ApiProperty({ example: 'https://unitpay.ru/pay/...' })
  payment_url!: string;

  @ApiProperty({ example: '550e8400-e29b-41d4-a716-446655440000' })
  payment_id!: string;
}
