import { Injectable, NotFoundException } from '@nestjs/common';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class PostsService {
  constructor(private prisma: PrismaService) {}

  //create post
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
    });
    return post;
  }

  //get post according to category id
  async findPostByCategoryId(id: number) {
    const category = await this.prisma.category.findUnique({
      where: { id },
      select: { name: true },
    });
    if (!category) {
      throw new NotFoundException(`Category with ID ${id} not found`);
    }
    const post = await this.prisma.post.findMany({
      where: {
        categoryId: id,
      },
    });
    return {
      category: category.name,
      post,
    };
  }

  //get all posts
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

  //get verified articles
  async findVerifiedPosts() {
    return await this.prisma.post.findMany({
      where: {
        status: 'VERIFIED',
      },
    });
  }

  //get Notverified articles
  async findNotverifiedPosts() {
    return await this.prisma.post.findMany({
      where: {
        status: 'NOTVERIFIED',
      },
    });
  }

  // get post by specific id and update views count
  async findOne(id: number) {
    const post = await this.prisma.post.findUnique({
      where: { id: id },
    });
    if (!post) {
      throw new NotFoundException('Post not found');
    }
    const updatedPost = await this.prisma.post.update({
      where: {
        id: post.id,
      },
      data: {
        view: post.view + 1, //increment views count by 1
      },
    });
    return updatedPost;
  }

  //update post
  async update(id: number, updatePostDto: UpdatePostDto) {
    return await this.prisma.post.update({
      where: { id: id },
      data: updatePostDto,
    });
  }

  //remove posts
  async remove(id: number) {
    return await this.prisma.post.delete({ where: { id: id } });
  }
}
