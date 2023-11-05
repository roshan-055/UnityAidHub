import { ApiProperty } from '@nestjs/swagger';
import { EmailNotification } from '@prisma/client';

export class EmailNotificationEntity implements EmailNotification {
  @ApiProperty()
  id: number;

  @ApiProperty()
  subject: string;

  @ApiProperty()
  body: string;

  @ApiProperty()
  attachments: string;

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  updatedAt: Date;

  @ApiProperty()
  fundraiserId: number;
}
