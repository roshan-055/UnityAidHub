import { ApiProperty } from '@nestjs/swagger';
import { Fundraiser } from '@prisma/client';

export class FundraiserEntity implements Fundraiser {
  @ApiProperty()
  id: number;

  @ApiProperty()
  name: string;

  @ApiProperty()
  phoneNumber: string;

  @ApiProperty()
  address: string;

  @ApiProperty()
  email: string;

  @ApiProperty()
  requiredAmount: number;

  @ApiProperty()
  identityDocument: string;

  @ApiProperty()
  description: string;

  @ApiProperty()
  supportingDocument: string[];

  @ApiProperty()
  url: string;

  @ApiProperty()
  secretKey: string;

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  updatedAt: Date;
}
