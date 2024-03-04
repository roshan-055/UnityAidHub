import { Injectable, NotFoundException } from '@nestjs/common';
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
      documents,
      status,
      postType,
      country,
      postUpdates,
      categoryId,
      userId,
    } = createPostDto;

    const post = await this.prisma.post.create({
      data: {
        title,
        description,
        goalAmount,
        currentAmount: 0,
        image,
        documents,
        status,
        postType,
        country,
        postUpdates,
        categoryId,
        userId,
      },
    });
    return post;
  }

  async findAll() {
    return await this.prisma.post.findMany({
      include: {
        User: {
          select: {
            id: true,
            name: true,
          },
        },
        donations: {
          select: {
            amount: true,
            User: {
              select: {
                name: true,
              },
            },
          },
        },
        comments: true,
      },
    });
  }

  async getVerifiedPost() {
    return await this.prisma.post.findMany({
      include: {
        User: {
          select: {
            id: true,
            name: true,
          },
        },
        donations: {
          select: {
            amount: true,
            User: {
              select: {
                name: true,
              },
            },
          },
        },
        comments: true,
      },
      where: {
        status: 'VERIFIED',
      },
    });
  }

  async getUnverifiedPost() {
    return await this.prisma.post.findMany({
      include: {
        User: {
          select: {
            id: true,
            name: true,
          },
        },
        donations: {
          select: {
            amount: true,
            User: {
              select: {
                name: true,
              },
            },
          },
        },
        comments: true,
      },
      where: {
        status: 'NOTVERIFIED',
      },
    });
  }

  async findOne(id: number) {
    const post = await this.prisma.post.findUnique({
      where: { id: id },
      include: {
        donations: true,
      },
    });

    if (!post) {
      throw new NotFoundException('Post not found');
    }
    //add donation amount in a post in currentAmount field
    const currentAmount = post.donations.reduce(
      (total, donation) => total + donation.amount,
      0,
    );

    const updatedPost = await this.prisma.post.update({
      where: { id: post.id },
      include: {
        User: {
          select: {
            id: true,
            name: true,
          },
        },
        donations: {
          select: {
            amount: true,
            User: {
              select: {
                name: true,
              },
            },
          },
        },
        comments: {
          select: {
            body: true,
            userId: true,
          },
        },
      },
      data: {
        view: post.view + 1, // Increment the view count by 1
        currentAmount: currentAmount,
      },
    });

    return updatedPost;
  }

  async update(id: number, updatePostDto: UpdatePostDto) {
    return await this.prisma.post.update({
      where: { id },
      data: updatePostDto,
    });
  }

  async updateStatus(id: number) {
    const post = await this.prisma.post.update({
      where: { id },
      data: { status: 'VERIFIED' },
    });

    if (!post) {
      throw new NotFoundException(`Post with ID ${id} not found`);
    }
    return post;
  }

  async remove(id: number) {
    return await this.prisma.post.delete({ where: { id: id } });
  }
}
