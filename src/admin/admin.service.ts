import { Injectable } from '@nestjs/common';
import { CreateAdminDto } from './dto/create-admin.dto';
import { UpdateAdminDto } from './dto/update-admin.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { hashPassword } from 'src/utils/bcrypt';

@Injectable()
export class AdminService {
  constructor(private readonly prisma: PrismaService) { }
  async create(createAdminDto: CreateAdminDto) {
    const { name, email, password } = createAdminDto;
    const hashedPassword = hashPassword(password);
    const admin = await this.prisma.admin.create({
      data: {
        name,
        email,
        password: hashedPassword,
      },
    });
    return admin;
  }

  async findAll() {
    return this.prisma.admin.findMany();
  }

  findOne(id: number) {
    return this.prisma.admin.findUnique({ where: { id } });
  }

  update(id: number, updateAdminDto: UpdateAdminDto) {
    if (updateAdminDto.password) {
      updateAdminDto.password = hashPassword(updateAdminDto.password);
    }
    return this.prisma.admin.update({
      where: { id },
      data: updateAdminDto,
    });
  }

  remove(id: number) {
    return this.prisma.admin.delete({ where: { id: id } });
  }
}
