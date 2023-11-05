import { ApiProperty } from '@nestjs/swagger';
import { Activity } from '@prisma/client';
import {
  IsDate,
  IsNotEmpty,
  IsOptional,
  IsString,
  MinDate,
  Validate,
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from 'class-validator';
import { Type } from 'class-transformer';
@ValidatorConstraint({ name: 'EndDateValidator', async: false })
export class EndDateValidator implements ValidatorConstraintInterface {
  validate(endDate: Date, { object }: any) {
    const startDate = object.startDate;
    if (endDate <= startDate) {
      return false;
    }
    return true;
  }

  defaultMessage() {
    return 'End date must be after start date';
  }
}
function today(): Date {
  const now = new Date();
  now.setHours(0, 0, 0, 0);
  return now;
}

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
  @IsDate()
  @MinDate(today(), { message: 'Start date must be from today.' })
  @Type(() => Date)
  startDate: Date;

  @ApiProperty()
  @IsDate()
  @Validate(EndDateValidator)
  @Type(() => Date)
  endDate: Date;

  @ApiProperty()
  @IsNotEmpty()
  adCategoryId: number;
}
