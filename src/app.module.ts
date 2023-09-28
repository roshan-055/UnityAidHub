import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { AuthModule } from './auth/auth.module';
import { AdminModule } from './admin/admin.module';
import { PostsModule } from './posts/posts.module';
import { CategoryModule } from './category/category.module';
import { FundraisersModule } from './fundraisers/fundraisers.module';

@Module({
  imports: [
    PrismaModule,
    AuthModule,
    AdminModule,
    PostsModule,
    CategoryModule,
    FundraisersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
