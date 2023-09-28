import { ApiProperty } from '@nestjs/swagger';
import { Post, Status } from '@prisma/client';

export class PostEntity implements Post {
  @ApiProperty()
  id: number;

  @ApiProperty()
  title: string;

  @ApiProperty()
  description: string;

  @ApiProperty()
  startDate: Date;

  @ApiProperty()
  endDate: Date;

  @ApiProperty()
  goalAmount: number;

  @ApiProperty()
  currentAmount: number;

  @ApiProperty()
  imageUrl: string;

  @ApiProperty()
  view: number;

  @ApiProperty()
  status: Status;

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  updatedAt: Date;

  @ApiProperty()
  categoryId: number;

  @ApiProperty()
  fundraiserId: number;
}
