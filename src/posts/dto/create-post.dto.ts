import { Type } from '@prisma/client';
import { ApiProperty } from '@nestjs/swagger';
import { Status } from '@prisma/client';
import {
  IsDate,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';

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
  @IsNumber()
  @IsNotEmpty()
  goalAmount: number;

  @ApiProperty()
  @IsNumber()
  @IsOptional()
  currentAmount: number;

  @ApiProperty()
  @IsOptional()
  image: string[];

  @ApiProperty()
  @IsOptional()
  view: number;

  @ApiProperty({ default: 'NOTVERIFIED' })
  @IsOptional()
  status: Status;

  @ApiProperty({ default: 'BASIC' })
  @IsOptional()
  postType: Type;

  @ApiProperty()
  @IsOptional()
  postUpdates: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  categoryId: number;

  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  userId: number;
}
