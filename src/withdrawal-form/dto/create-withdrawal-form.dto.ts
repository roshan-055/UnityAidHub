import { ApiProperty } from '@nestjs/swagger';
import { Payment } from '@prisma/client';
import { IsEnum, IsNotEmpty, IsNumber } from 'class-validator';

export class CreateWithdrawalFormDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  withdrawalAmount: number;

  @ApiProperty()
  @IsNotEmpty()
  withdrawalType: Payment;

  @ApiProperty()
  @IsNotEmpty()
  accountNumber: string;

  @ApiProperty()
  @IsNotEmpty()
  accountName: string;

  @ApiProperty()
  @IsNotEmpty()
  identityDocument: string;

  @ApiProperty()
  fundraiserId: number;
}
