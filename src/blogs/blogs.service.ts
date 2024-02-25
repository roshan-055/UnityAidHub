import { Injectable } from '@nestjs/common';
import { CreateBlogDto } from './dto/create-blog.dto';
import { UpdateBlogDto } from './dto/update-blog.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class BlogsService {
  constructor(private prisma: PrismaService) {}

  async create(createBlogDto: CreateBlogDto) {
    const { title, description, imageUrl, author, categoryId } = createBlogDto;
    const blog = await this.prisma.blog.create({
      data: {
        title,
        description,
        imageUrl,
        author,
        categoryId,
      },
    });
    return blog;
  }

  async findAll() {
    return await this.prisma.blog.findMany();
  }

  async findOne(id: number) {
    return await this.prisma.blog.findUnique({ where: { id: id } });
  }

  async update(id: number, updateBlogDto: UpdateBlogDto) {
    return await this.prisma.blog.update({
      where: { id },
      data: updateBlogDto,
    });
  }

  async remove(id: number) {
    return await this.prisma.blog.delete({ where: { id: id } });
  }
}
