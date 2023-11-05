import { ApiProperty } from '@nestjs/swagger';
import { Donor } from '@prisma/client';

export class DonorEntity implements Donor {
  @ApiProperty()
  @ApiProperty()
  id: number;

  @ApiProperty()
  name: string;

  @ApiProperty()
  email: string;

  @ApiProperty()
  phoneNumber: string;

  @ApiProperty()
  address: string;

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  updatedAt: Date;
}
