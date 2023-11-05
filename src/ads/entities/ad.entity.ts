import { ApiProperty } from '@nestjs/swagger';
import { $Enums, Activity, Ads } from '@prisma/client';

export class AdEntity implements Ads {
  @ApiProperty()
  id: number;

  @ApiProperty()
  title: string;

  @ApiProperty()
  description: string;

  @ApiProperty()
  imageUrl: string;

  @ApiProperty()
  activity: Activity;

  @ApiProperty()
  companyName: string;

  @ApiProperty()
  startDate: Date | null;

  @ApiProperty()
  endDate: Date | null;

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  updatedAt: Date;

  @ApiProperty()
  adCategoryId: number;
}
