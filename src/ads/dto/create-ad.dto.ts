import { ApiProperty } from '@nestjs/swagger';
import { Activity } from '@prisma/client';
import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateAdDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  title: string;

  @ApiProperty()
  @IsOptional()
  description: string;

  @ApiProperty()
  @IsOptional()
  imageUrl: string;

  @ApiProperty({ default: 'ACTIVE' })
  activity: Activity;

  @ApiProperty()
  @IsString()
  @IsOptional()
  companyName: string;

  @ApiProperty()
  @IsNotEmpty()
  adCategoryId: number;
}
