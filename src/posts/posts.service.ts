import { Injectable } from '@nestjs/common';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class PostsService {
  constructor(private prisma: PrismaService) { }

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
    } = createPostDto

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
        categoryId,
      },
      include: {
        donations: true,
        Comment: true,
        Category: true,
      }
    });
    return post;
  }

  findAll() {
    return this.prisma.post.findMany();
  }

  findOne(id: number) {
    return this.prisma.post.findUnique({ where: { id: id } });
  }

  update(id: number, updatePostDto: UpdatePostDto) {
    return this.prisma.post.update({
      where: { id: id },
      data: updatePostDto,
    });
  }

  remove(id: number) {
    return this.prisma.post.delete({ where: { id: id } });
  }
}
