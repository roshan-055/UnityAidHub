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

  findOne(id: number) {
    return `This action returns a #${id} fundraiser`;
  }

  update(id: number, updateFundraiserDto: UpdateFundraiserDto) {
    return `This action updates a #${id} fundraiser`;
  }

  remove(id: number) {
    return `This action removes a #${id} fundraiser`;
  }
}
