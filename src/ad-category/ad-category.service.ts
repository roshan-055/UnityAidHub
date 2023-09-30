import { Injectable } from '@nestjs/common';
import { CreateAdCategoryDto } from './dto/create-ad-category.dto';
import { UpdateAdCategoryDto } from './dto/update-ad-category.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class AdCategoryService {
  constructor(private prisma: PrismaService) {}

  async createAdCategory(createAdCategoryDto: CreateAdCategoryDto) {
    const { name } = createAdCategoryDto;
    return await this.prisma.adCategory.create({
      data: {
        name,
      },
    });
  }

  findAll() {
    return this.prisma.adCategory.findMany({
      include: {
        ads: {
          select: { activity: true },
        },
      },
    });
  }

  findOne(id: number) {
    return this.prisma.adCategory.findUnique({
      where: { id },
      include: {
        ads: true,
      },
    });
  }

  updateAdCategory(id: number, updateAdCategoryDto: UpdateAdCategoryDto) {
    const { name } = updateAdCategoryDto;
    return this.prisma.adCategory.update({
      where: { id },
      data: { name },
      include: {
        ads: true,
      },
    });
  }

  removeAdCategory(id: number) {
    return this.prisma.adCategory.delete({
      where: { id },
      include: {
        ads: true,
      },
    });
  }
}
