import { Injectable } from '@nestjs/common';
import { CreateDonorDto } from './dto/create-donor.dto';
import { UpdateDonorDto } from './dto/update-donor.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class DonorsService {
  constructor(private prisma: PrismaService) {}

  async create(createDonorDto: CreateDonorDto) {
    const { name, email, phoneNumber, address } = createDonorDto;
    const donor = await this.prisma.donor.create({
      data: {
        name,
        email,
        phoneNumber,
        address,
      },
    });
    return donor;
  }

  async findAll() {
    return await this.prisma.donor.findMany();
  }

  async findOne(id: number) {
    return await this.prisma.donor.findUnique({ where: { id: id } });
  }

  async update(id: number, updateDonorDto: UpdateDonorDto) {
    return await this.prisma.donor.update({
      where: { id },
      data: updateDonorDto,
    });
  }

  async remove(id: number) {
    return await this.prisma.donor.delete({ where: { id: id } });
  }
}
