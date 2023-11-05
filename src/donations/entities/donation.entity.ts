import { ApiProperty } from '@nestjs/swagger';
import { Donation } from '@prisma/client';

export class DonationEntity implements Donation {
  @ApiProperty()
  id: number;

  @ApiProperty()
  amount: number;

  @ApiProperty()
  remarks: string;

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  updatedAt: Date;

  @ApiProperty()
  fundraiserId: number;

  @ApiProperty()
  donorId: number;
}
