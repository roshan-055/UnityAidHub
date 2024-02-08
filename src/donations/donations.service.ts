import { Injectable } from '@nestjs/common';
import { CreateDonationDto } from './dto/create-donation.dto';
import { UpdateDonationDto } from './dto/update-donation.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class DonationsService {
  constructor(private Prisma: PrismaService) {}

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
    return donation;
  }

  async findAll() {
    return await this.Prisma.donation.findMany();
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
