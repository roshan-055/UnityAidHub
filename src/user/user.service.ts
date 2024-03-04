import {
  ClassSerializerInterceptor,
  Injectable,
  UseInterceptors,
} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import * as bcrypt from 'bcrypt';

export const roundsOfHashing = 10;

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  async create(createUserDto: CreateUserDto) {
    const hashedPassword = await bcrypt.hash(
      createUserDto.password,
      roundsOfHashing,
    );

    createUserDto.password = hashedPassword;

    return this.prisma.user.create({
      data: createUserDto,
    });
  }

  // to get all users
  async findAll() {
    return await this.prisma.user.findMany();
  }

  //to find a specific user with given id
  async findOne(id: number) {
    return await this.prisma.user.findUnique({
      where: { id: id },
      include: {
        post: true,
        donations: true,
      },
    });
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    if (updateUserDto.password) {
      updateUserDto.password = await bcrypt.hash(
        updateUserDto.password,
        roundsOfHashing,
      );
    }

    return this.prisma.user.update({
      where: { id },
      data: updateUserDto,
    });
  }

  // to delete a specific user with given id
  remove(id: number) {
    return this.prisma.user.delete({ where: { id: id } });
  }
}
