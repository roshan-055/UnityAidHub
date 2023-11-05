import { ApiProperty } from '@nestjs/swagger';
import { $Enums, Payment, WithdrawalForm } from '@prisma/client';

export class WithdrawalFormEntiyty implements WithdrawalForm {
  @ApiProperty()
  id: number;

  @ApiProperty()
  withdrawalAmount: number;

  @ApiProperty()
  withdrawalType: Payment;

  @ApiProperty()
  accountNumber: string;

  @ApiProperty()
  accountName: string;

  @ApiProperty()
  identityDocument: string;

  @ApiProperty()
  fundraiserId: number;
}
