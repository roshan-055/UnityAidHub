import { HttpException, Injectable, NotFoundException } from '@nestjs/common';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { error } from 'console';
import { Status } from '@prisma/client';

@Injectable()
export class PostsService {
  constructor(private prisma: PrismaService) {}

  async create(createPostDto: CreatePostDto) {
    const {
      title,
      description,
      startDate,
      endDate,
      goalAmount,
      currentAmount,
      imageUrl,
      view,
      status,
      categoryId,
      fundraiserId,
    } = createPostDto;
    const post = await this.prisma.post.create({
      data: {
        title,
        description,
        startDate,
        endDate,
        goalAmount,
        currentAmount,
        imageUrl,
        view,
        status,
        fundraiserId: Number(fundraiserId),
        categoryId: Number(categoryId),
      },
      include: {
        Fundraiser: {
          select: {
            name: true,
          },
        },
        Category: {
          select: {
            name: true,
          },
        },
      },
    });
    return post;
  }

  async findAll() {
    return await this.prisma.post.findMany({
      include: {
        Fundraiser: {
          select: {
            name: true,
            description: true,
          },
        },
        Category: {
          select: {
            name: true,
          },
        },
      },
    });
  }

  async findOne(id: number) {
    const post = await this.prisma.post.findUnique({ where: { id: id } });
    if (!post) {
      throw new NotFoundException('Post not found');
    }
    const updatedPost = await this.prisma.post.update({
      where: { id: post.id },
      data: { view: post.view + 1 },
    });
    return updatedPost;
  }

  async update(id: number, updatePostDto: UpdatePostDto) {
    return await this.prisma.post.update({
      where: { id: id },
      data: updatePostDto,
    });
  }

  async remove(id: number) {
    return await this.prisma.post.delete({ where: { id: id } });
  }
}
