import { ApiProperty } from '@nestjs/swagger';
import { Blog, Prisma } from '@prisma/client';

export class BlogEntity implements Blog {
  @ApiProperty()
  id: number;

  @ApiProperty()
  title: string;

  @ApiProperty()
  description: string;

  @ApiProperty()
  imageUrl: string[];

  @ApiProperty()
  author: string;

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  updatedAt: Date;

  @ApiProperty()
  categoryId: number;
}
