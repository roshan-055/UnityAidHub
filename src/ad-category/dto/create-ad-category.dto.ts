import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class CreateAdCategoryDto {
  @ApiProperty()
  @IsNotEmpty()
  name: string;
}
