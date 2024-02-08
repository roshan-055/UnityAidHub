import { Injectable } from '@nestjs/common';
import { CreatePageDto } from './dto/create-page.dto';
import { UpdatePageDto } from './dto/update-page.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class PagesService {
  constructor(private prisma: PrismaService) {}

  async create(createPageDto: CreatePageDto) {
    const { title, content, imageUrl, slug } = createPageDto;
    const pages = await this.prisma.pages.create({
      data: {
        title,
        content,
        imageUrl,
        slug,
      },
    });
    return pages;
  }

  async findAll() {
    return await this.prisma.pages.findMany();
  }

  async findOne(id: number) {
    return await this.prisma.pages.findUnique({ where: { id: id } });
  }

  async update(id: number, updatePageDto: UpdatePageDto) {
    return await this.prisma.pages.update({
      where: { id },
      data: updatePageDto,
    });
  }

  async remove(id: number) {
    return await this.prisma.pages.delete({ where: { id: id } });
  }
}
