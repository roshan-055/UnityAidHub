import { Injectable, NotFoundException } from '@nestjs/common';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { MailerService } from '@nestjs-modules/mailer';
import { Post } from '@prisma/client';

@Injectable()
export class PostsService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly mailerService: MailerService,
  ) {}

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
    const user = await this.prisma.user.findUnique({
      where: { id: userId },
      select: { name: true, email: true },
    });
    await this.sendPostConfirmationEmail(post, user);
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
        comments: {
          select: {
            body: true,
            User: {
              select: {
                name: true,
                id: true,
              },
            },
          },
        },
      },
    });
  }

  async sendPostConfirmationEmail(
    posts: Post,
    user: { name: string; email: string },
  ) {
    const postDetails = {
      email: process.env.SMTP_USER,
    };

    const message = `
    Dear ${user.name},
    
    Thank you for submitting a post to Unity Aid Hub.
    
    Your post is currently under review and will be verified by our administrators. After confirmation to our policies, it will be posted for a fundraising campaign.
    
    We appreciate your dedication to our mission, and your post plays a crucial role in making a positive impact on the lives of those we serve.
    
    If you have any questions or need further assistance, please feel free to reach out to us at ${postDetails.email}.
    
    Best regards,
    
    Unity Aid Hub
    ${postDetails.email}
    `;

    await this.mailerService.sendMail({
      to: user.email,
      subject: 'Fundraising Post Confirmation',
      text: message,
      context: {
        postDetails: {
          postId: posts.id,
        },
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
        comments: {
          select: {
            body: true,
            User: {
              select: {
                name: true,
                id: true,
              },
            },
          },
        },
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
        comments: {
          select: {
            body: true,
            User: {
              select: {
                name: true,
                id: true,
              },
            },
          },
        },
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
      0 * 100,
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
            payment: true,
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
            User: {
              select: {
                name: true,
                id: true,
              },
            },
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
