import { Injectable } from '@nestjs/common';
import { CreateAdDto } from './dto/create-ad.dto';
import { UpdateAdDto } from './dto/update-ad.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { Ads } from '@prisma/client';

@Injectable()
export class AdsService {
  constructor(private prisma: PrismaService) {}

  async create(createAdDto: CreateAdDto) {
    const {
      title,
      description,
      imageUrl,
      activity,
      companyName,
      startDate,
      endDate,
      type,
    } = createAdDto;
    const ads = await this.prisma.ads.create({
      data: {
        title,
        description,
        imageUrl,
        activity,
        companyName,
        startDate,
        endDate,
        type,
      },
    });
    return ads;
  }

  async checkEndDate() {
    //get all ads
    const ads = await this.prisma.ads.findMany();
    //Iterate through each ads
    for (const ad of ads) {
      function today(): Date {
        const now = new Date();
        now.setHours(0, 0, 0, 0);
        return now;
      }
      if (new Date(ad.endDate.setHours(0, 0, 0, 0)) <= today()) {
        await this.prisma.ads.update({
          where: { id: ad.id },
          data: { activity: 'INACTIVE' },
        });
      } else {
        await this.prisma.ads.update({
          where: { id: ad.id },
          data: { activity: 'ACTIVE' },
        });
      }
    }
  }

  async findAll() {
    return await this.prisma.ads.findMany();
  }

  async findActiveAds() {
    this.checkEndDate();
    return await this.prisma.ads.findMany({
      where: {
        activity: 'ACTIVE',
      },
    });
  }

  async findOne(id: number) {
    return await this.prisma.ads.findUnique({ where: { id: id } });
  }

  async update(id: number, updateAdDto: UpdateAdDto) {
    return await this.prisma.ads.update({
      where: { id },
      data: updateAdDto,
    });
  }

  async remove(id: number) {
    return await this.prisma.ads.delete({ where: { id: id } });
  }
}
