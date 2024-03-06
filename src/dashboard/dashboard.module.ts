import { Module } from '@nestjs/common';
import { DashboardService } from './dashboard.service';
import { DashboardController } from './dashboard.controller';
import { UserService } from 'src/user/user.service';
import { PostsService } from 'src/posts/posts.service';
import { DonationsService } from 'src/donations/donations.service';
import { PrismaService } from 'src/prisma/prisma.service';
import { StripeModule } from 'src/stripe/stripe.module';
import { DonationsModule } from 'src/donations/donations.module';

@Module({
  imports: [StripeModule, DonationsModule],
  controllers: [DashboardController],
  providers: [
    DashboardService,
    UserService,
    PostsService,
    DonationsService,
    PrismaService,
  ],
})
export class DashboardModule {}
