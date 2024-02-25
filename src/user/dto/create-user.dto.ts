import { Activity, Role, Status } from '@prisma/client';
import { IsEmail, IsNotEmpty, IsOptional } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
export class CreateUserDto {
  @IsNotEmpty()
  @ApiProperty()
  name: string;

  @IsOptional()
  @ApiProperty()
  phoneNumber: string;

  @IsNotEmpty()
  @IsEmail()
  @ApiProperty()
  email: string;

  @ApiProperty()
  @IsOptional()
  address: string;

  @ApiProperty()
  @IsOptional()
  profilePictureUrl: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsOptional()
  password: string;

  @ApiProperty({ default: 'USER' })
  @IsOptional()
  roles: Role;

  @ApiProperty({ default: 'ACTIVE' })
  @IsOptional()
  activity:Activity;
}
