import { Injectable } from '@nestjs/common';
import { CreateDonationDto } from './dto/create-donation.dto';
import { UpdateDonationDto } from './dto/update-donation.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { Donation } from '@prisma/client';
import { MailerService } from '@nestjs-modules/mailer';
import { StripeService } from 'src/stripe/stripe.service';

@Injectable()
export class DonationsService {
  constructor(
    private prisma: PrismaService,
    private readonly mailerService: MailerService,
    private readonly stripeService: StripeService,
  ) {}

  async create(createDonationDto: CreateDonationDto): Promise<Donation> {
    const { amount, remarks, postId, userId, payment } = createDonationDto;

    // Use the StripeService to create a payment intent
    const clientSecret = await this.stripeService.createPayment(
      amount * 100,
      'usd',
    );

    const donation = await this.prisma.donation.create({
      data: {
        amount,
        remarks,
        postId,
        userId,
        payment,
      },
    });

    const user = await this.prisma.user.findUnique({
      where: { id: userId },
      select: { name: true, email: true },
    });

    await this.sendDonationConfirmationEmail(donation, user);
    return { ...donation, clientSecret };
  }

  async findAll() {
    return await this.prisma.donation.findMany();
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

  We're thrilled to express our deepest gratitude for your generous donation. Your help is invaluable to us, and it makes a significant impact on our mission.

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
    return await this.prisma.donation.findUnique({ where: { id: id } });
  }

  async update(id: number, updateDonationDto: UpdateDonationDto) {
    return await this.prisma.donation.update({
      where: { id },
      data: updateDonationDto,
    });
  }

  async remove(id: number) {
    return await this.prisma.donation.delete({ where: { id: id } });
  }
}
