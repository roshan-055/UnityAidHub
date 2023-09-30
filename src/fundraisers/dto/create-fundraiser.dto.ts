import { ApiProperty } from '@nestjs/swagger';
import {
  IsEmail,
  IsNotEmpty,
  IsOptional,
  IsString,
  minLength,
} from 'class-validator';

export class CreateFundraiserDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  name: string;

  @ApiProperty()
  @IsNotEmpty()
  phoneNumber: string;

  @ApiProperty()
  @IsNotEmpty()
  address: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @ApiProperty()
  @IsNotEmpty()
  requiredAmount: number;

  @ApiProperty()
  @IsNotEmpty()
  identityDocument: string;

  @ApiProperty()
  @IsNotEmpty()
  description: string;

  @ApiProperty()
  @IsNotEmpty()
  supportingDocument: string[];

  @ApiProperty()
  @IsOptional()
  url: string;

  @ApiProperty()
  @IsNotEmpty()
  secretKey: string;
}
