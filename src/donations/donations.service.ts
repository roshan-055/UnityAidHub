import { Injectable } from '@nestjs/common';
import { CreateDonationDto } from './dto/create-donation.dto';
import { UpdateDonationDto } from './dto/update-donation.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { Donation } from '@prisma/client';
import { MailerService } from '@nestjs-modules/mailer';

@Injectable()
export class DonationsService {
  constructor(
    private Prisma: PrismaService,
    private readonly mailerService: MailerService,
  ) {}

  async create(createDonationDto: CreateDonationDto) {
    const { amount, remarks, postId, userId, payment } = createDonationDto;
    const donation = await this.Prisma.donation.create({
      data: {
        amount,
        remarks,
        postId,
        userId,
        payment,
      },
    });
    const user = await this.Prisma.user.findUnique({
      where: { id: userId },
      select: { name: true, email: true },
    });
    await this.sendDonationConfirmationEmail(donation, user);
    return donation;
  }

  async findAll() {
    return await this.Prisma.donation.findMany();
  }

  async sendDonationConfirmationEmail(
    donations: Donation,
    user: { name: string; email: string },
  ) {
    const donationDetails = {
      amount: donations.amount,
      paymentMethod: donations.payment,
      email: process.env.SMTP_USER,
    };

    const message = `
  Dear ${user.name},

  We're thrilled to express our deepest gratitude for your generous donation. Your support is invaluable to us, and it makes a significant impact on our mission.

  Donation Details:
  - Amount: ${donationDetails.amount}
  - Payment Method: ${donationDetails.paymentMethod}

  Your kindness and generosity enable us to continue our important work and make a positive difference in the lives of those we serve.

  If you have any questions or would like more information about how your donation is making a difference, feel free to reach out to us at ${donationDetails.email}.

  Once again, thank you for your generosity. We look forward to your continued support.

  Best regards,

  Unity Aid Hub
  ${donationDetails.email}
`;

    await this.mailerService.sendMail({
      to: user.email,
      subject: 'Donation Confirmation',
      text: message,
      context: {
        donationDetails: {
          donationId: donations.id,
        },
      },
    });
  }

  async findOne(id: number) {
    return await this.Prisma.donation.findUnique({ where: { id: id } });
  }

  async update(id: number, updateDonationDto: UpdateDonationDto) {
    return await this.Prisma.donation.update({
      where: { id },
      data: updateDonationDto,
    });
  }

  async remove(id: number) {
    return await this.Prisma.donation.delete({ where: { id: id } });
  }
}
