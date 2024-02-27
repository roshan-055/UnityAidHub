import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateCategoryDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  darkImage: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  lightImage: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  primaryImage: string;
}
