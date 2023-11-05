import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateDonationDto {
  @ApiProperty()
  @IsNumber()
  @IsNotEmpty()
  amount: number;

  @ApiProperty()
  @IsOptional()
  @IsString()
  remarks: string;

  @ApiProperty()
  donorId: number;

  @ApiProperty()
  fundraiserId: number;
}
