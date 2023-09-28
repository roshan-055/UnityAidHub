import { ApiProperty } from '@nestjs/swagger';
import { Status } from '@prisma/client';
import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreatePostDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  title: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  description: string;

  @ApiProperty()
  @IsOptional()
  startDate: Date;

  @ApiProperty()
  @IsOptional()
  endDate: Date;

  @ApiProperty()
  @IsNotEmpty()
  goalAmount: number;

  @ApiProperty()
  @IsNotEmpty()
  currentAmount: number;

  @ApiProperty()
  @IsOptional()
  imageUrl: string;

  @ApiProperty()
  @IsOptional()
  view: number | null;

  @ApiProperty({ default: 'NOTVERIFIED' })
  @IsOptional()
  status: Status;

  @ApiProperty()
  @IsNotEmpty()
  categoryId: number;

  @ApiProperty()
  @IsNotEmpty()
  fundraiserId: number;
}
