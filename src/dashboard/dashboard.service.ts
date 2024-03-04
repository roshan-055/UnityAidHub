import { Injectable } from '@nestjs/common';
import { User } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class DashboardService {
  constructor(private readonly prisma: PrismaService) {}

  async countUser() {
    const totalUser = await this.prisma.user.count();
    const activeUser = await this.prisma.user.count({
      where: {
        activity: 'ACTIVE',
      },
    });
    const inactiveUser = await this.prisma.user.count({
      where: {
        activity: 'INACTIVE',
      },
    });
    return {
      totalUser: totalUser,
      activeUser: activeUser,
      inactiveUser: inactiveUser,
    };
  }

  async countPost() {
    const totalPost = await this.prisma.post.count();
    const verifiedPost = await this.prisma.post.count({
      where: {
        status: 'VERIFIED',
      },
    });
    const notVerifiedPost = await this.prisma.post.count({
      where: {
        status: 'NOTVERIFIED',
      },
    });
    return {
      totalPost: totalPost,
      verifiedPost: verifiedPost,
      notVerifiedPost: notVerifiedPost,
    };
  }

  async countDonation() {
    const totalDonation = await this.prisma.donation.count();
    return {
      totalDonation: totalDonation,
    };
  }

  async calculateTotalAmountOfDay() {
    // Calculate the total amount of donations for the current day
    const currentDate = new Date();
    currentDate.setHours(0, 0, 0, 0); // Set time to the beginning of the day

    const totalAmountOfDay = await this.prisma.donation.aggregate({
      _sum: {
        amount: true,
      },
      where: {
        createdAt: {
          gte: currentDate,
        },
      },
    });

    return {
      totalAmountOfDay: totalAmountOfDay._sum.amount || 0,
    };
  }

  async calculateTotalDonationAmount() {
    // Calculate the total amount of all donations
    const totalDonationAmount = await this.prisma.donation.aggregate({
      _sum: {
        amount: true,
      },
    });

    return {
      totalDonationAmount: totalDonationAmount._sum.amount || 0,
    };
  }
}

