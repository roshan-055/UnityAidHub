import { ApiProperty } from '@nestjs/swagger';
import { Post, Prisma, Status, Type } from '@prisma/client';

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
