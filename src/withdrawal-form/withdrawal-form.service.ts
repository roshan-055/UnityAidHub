import { Injectable } from '@nestjs/common';
import { CreateWithdrawalFormDto } from './dto/create-withdrawal-form.dto';
import { UpdateWithdrawalFormDto } from './dto/update-withdrawal-form.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class WithdrawalFormService {
  constructor(private prisma: PrismaService) {}

  async create(createWithdrawalFormDto: CreateWithdrawalFormDto) {
    const {
      withdrawalAmount,
      withdrawalType,
      accountNumber,
      accountName,
      identityDocument,
      fundraiserId,
    } = createWithdrawalFormDto;
    const withdrawalForm = await this.prisma.withdrawalForm.create({
      data: {
        withdrawalAmount,
        withdrawalType,
        accountNumber,
        accountName,
        identityDocument,
        fundraiserId: Number(fundraiserId),
      },
    });
    return withdrawalForm;
  }

  async findAll() {
    return await this.prisma.fundraiser.findMany();
  }

  async findOne(id: number) {
    return await this.prisma.withdrawalForm.findUnique({
      where: {
        id: id,
      },
    });
  }

  async update(id: number, updateWithdrawalFormDto: UpdateWithdrawalFormDto) {
    return await this.prisma.withdrawalForm.update({
      where: { id },
      data: updateWithdrawalFormDto,
    });
  }

  async remove(id: number) {
    return await this.prisma.withdrawalForm.delete({ where: { id: id } });
  }
}
