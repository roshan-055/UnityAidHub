import { ApiProperty } from '@nestjs/swagger';
import { Post, Prisma, Status, Type } from '@prisma/client';

export class PostEntity implements Post {
  @ApiProperty()
  country: string;

  @ApiProperty({ required: false, nullable: true })
  documents: string[];

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
  goalAmount: string;

  @ApiProperty()
  currentAmount: string;

  @ApiProperty({ required: false, nullable: true })
  image: string[];

  @ApiProperty()
  view: number;

  @ApiProperty()
  status: Status;

  @ApiProperty()
  postType: Type;

  @ApiProperty()
  postUpdates: string;

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  updatedAt: Date;

  @ApiProperty()
  categoryId: number;

  @ApiProperty()
  userId: number;
}
