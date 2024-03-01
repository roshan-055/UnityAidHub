import { Injectable } from '@nestjs/common';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class PostsService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createPostDto: CreatePostDto) {
    const {
      title,
      description,
      goalAmount,
      image,
      status,
      postType,
      postUpdates,
      categoryId,
      userId,
    } = createPostDto;

    const post = await this.prisma.post.create({
      data: {
        title,
        description,
        goalAmount,
        image,
        status,
        postType,
        postUpdates,
        categoryId,
        userId,
      },
      include: {
        comments: true,
      },
    });
    return post;
  }

  async findAll() {
    return await this.prisma.post.findMany({
      include: {
        donations: true,
        comments: true,
      },
      where: {
        status: 'VERIFIED',
      },
    });
  }

  async findOne(id: number) {
    return await this.prisma.post.findUnique({
      where: {
        id: id,
        status: 'VERIFIED',
      },
      include: {
        donations: true,
        comments: true,
      },
    });
  }

  async update(id: number, updatePostDto: UpdatePostDto) {
    return await this.prisma.post.update({
      where: { id },
      data: updatePostDto,
    });
  }

  async remove(id: number) {
    return await this.prisma.post.delete({ where: { id: id } });
  }
}
