import { Injectable } from '@nestjs/common';
import { CreateEmailNotificationDto } from './dto/create-email-notification.dto';
import { UpdateEmailNotificationDto } from './dto/update-email-notification.dto';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class EmailNotificationsService {
  constructor(private prisma: PrismaService) {}

  async create(createEmailNotificationDto: CreateEmailNotificationDto) {
    const { subject, body, attachments } = createEmailNotificationDto;
    const emailNotification = await this.prisma.emailNotification.create({
      data: {
        subject,
        body,
        attachments,
      },
    });
    return emailNotification;
  }

  async findAll() {
    return await this.prisma.emailNotification.findMany();
  }

  async findOne(id: number) {
    return await this.prisma.emailNotification.findUnique({
      where: { id: id },
    });
  }

  async update(
    id: number,
    updateEmailNotificationDto: UpdateEmailNotificationDto,
  ) {
    return await this.prisma.emailNotification.update({
      where: { id },
      data: updateEmailNotificationDto,
    });
  }

  async remove(id: number) {
    return await this.prisma.emailNotification.delete({ where: { id: id } });
  }
}
