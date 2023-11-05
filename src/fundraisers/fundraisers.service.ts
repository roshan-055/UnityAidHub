import { Injectable } from '@nestjs/common';
import { CreateFundraiserDto } from './dto/create-fundraiser.dto';
import { UpdateFundraiserDto } from './dto/update-fundraiser.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class FundraisersService {
  constructor(private prisma: PrismaService) {}

  async create(createFundraiserDto: CreateFundraiserDto) {
    const {
      name,
      phoneNumber,
      address,
      email,
      requiredAmount,
      identityDocument,
      description,
      supportingDocument,
      url,
      secretKey,
    } = createFundraiserDto;
    const fundraiser = await this.prisma.fundraiser.create({
      data: {
        name,
        phoneNumber,
        address,
        email,
        requiredAmount,
        identityDocument,
        description,
        supportingDocument,
        url,
        secretKey,
      },
    });
    return fundraiser;
  }

  async findAll() {
    return await this.prisma.fundraiser.findMany();
  }

  async findOne(id: number) {
    return await this.prisma.fundraiser.findUnique({ where: { id: id } });
  }

  async update(id: number, updateFundraiserDto: UpdateFundraiserDto) {
    return await this.prisma.fundraiser.update({
      where: { id },
      data: updateFundraiserDto,
    });
  }

  async remove(id: number) {
    return await this.prisma.fundraiser.delete({ where: { id: id } });
  }
}
