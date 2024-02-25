import { Injectable } from '@nestjs/common';
import { CreateLikeDto } from './dto/create-like.dto';
import { UpdateLikeDto } from './dto/update-like.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class LikeService {
  constructor(private prisma: PrismaService) {}

  async create(createLikeDto: CreateLikeDto) {
    const { commentId, userId } = createLikeDto;
    const like = await this.prisma.like.create({
      data: {
        commentId,
        userId,
      },
    });
    return like;
  }

  async findAll() {
    return await this.prisma.like.findMany();
  }

  async findOne(id: number) {
    return await this.prisma.like.findUnique({ where: { id: id } });
  }

  async update(id: number, updateLikeDto: UpdateLikeDto) {
    return await this.prisma.like.update({
      where: { id },
      data: updateLikeDto,
    });
  }

  async remove(id: number) {
    return await this.prisma.like.delete({ where: { id: id } });
  }
}
