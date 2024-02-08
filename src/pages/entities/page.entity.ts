import { ApiProperty } from '@nestjs/swagger';
import { Pages, Prisma } from '@prisma/client';

export class PageEntity implements Pages {
  @ApiProperty()
  id: number;

  @ApiProperty()
  title: string;

  @ApiProperty()
  slug: string;

  @ApiProperty()
  imageUrl: string[];

  @ApiProperty()
  content: string;

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  updatedAt: Date;
}
