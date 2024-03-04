import { Controller, Get } from '@nestjs/common';
import { DashboardService } from './dashboard.service';
import { ApiTags } from '@nestjs/swagger';

@Controller('dashboard')
@ApiTags('dashboard')
export class DashboardController {
  constructor(private readonly dashboardService: DashboardService) {}

  @Get('user-count')
  async countUser() {
    return await this.dashboardService.countUser();
  }

  @Get('post-count')
  async countPost() {
    return await this.dashboardService.countPost();
  }

  @Get('donation-count')
  async countDonation() {
    return await this.dashboardService.countDonation();
  }

  @Get('totalDonation')
  async calculateTotalDonationAmount() {
    return await this.dashboardService.calculateTotalDonationAmount();
  }

  @Get('donation-day')
  async calculateTotalAmountOfDay() {
    return await this.dashboardService.calculateTotalAmountOfDay();
  }
}
