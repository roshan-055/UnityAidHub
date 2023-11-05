import { Injectable } from '@nestjs/common';
import { CreateDonationDto } from './dto/create-donation.dto';
import { UpdateDonationDto } from './dto/update-donation.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class DonationsService {
  constructor(private prisma: PrismaService) {}

  async create(createDonationDto: CreateDonationDto) {
    const { amount, remarks, donorId, fundraiserId } = createDonationDto;
    const donation = await this.prisma.donation.create({
      data: {
        amount,
        remarks,
        donorId,
        fundraiserId,
      },
    });
    return donation;
  }

  async findAll() {
    return await this.prisma.donation.findMany();
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
