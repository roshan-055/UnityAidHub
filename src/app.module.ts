import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CategoryModule } from './category/category.module';
import { AdsModule } from './ads/ads.module';
import { AdCategoryModule } from './ad-category/ad-category.module';
import { CommentsModule } from './comments/comments.module';
import { UserModule } from './user/user.module';
import { PostsModule } from './posts/posts.module';
import { DonationsModule } from './donations/donations.module';
import { LikeModule } from './like/like.module';
import { PagesModule } from './pages/pages.module';
import { BlogsModule } from './blogs/blogs.module';
import { AuthModule } from './auth/auth.module';
@Module({
  imports: [
    CategoryModule,
    AdsModule,
    AdCategoryModule,
    CommentsModule,
    UserModule,
    AuthModule,
    PostsModule,
    DonationsModule,
    LikeModule,
    PagesModule,
    BlogsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
