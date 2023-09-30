import { Injectable } from '@nestjs/common';
import { CreateAdDto } from './dto/create-ad.dto';
import { UpdateAdDto } from './dto/update-ad.dto';
import { PrismaService } from 'src/prisma/prisma.service';

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
      adCategoryId,
    } = createAdDto;
    const ads = await this.prisma.ads.create({
      data: {
        title,
        description,
        imageUrl,
        activity,
        companyName,
        adCategoryId: Number(adCategoryId),
      },
    });
    return ads;
  }

  async findAll() {
    return await this.prisma.ads.findMany({
      include: {
        AdCategory: {
          select: {
            name: true,
          },
        },
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
