import { ApiProperty } from '@nestjs/swagger';
import { User, Role, Status, Activity } from '@prisma/client';
export class UserEntity implements User {
  username: string;
  @ApiProperty()
  id: number;

  @ApiProperty()
  name: string;

  @ApiProperty()
  phoneNumber: string | null;

  @ApiProperty()
  email: string;

  @ApiProperty()
  address: string | null;

  @ApiProperty()
  password: string;

  @ApiProperty()
  roles: Role;

  @ApiProperty()
  activity: Activity;

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  updatedAt: Date | null;

  @ApiProperty()
  profilePictureUrl: string | null;
}
