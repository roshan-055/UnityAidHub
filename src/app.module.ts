import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { AuthModule } from './auth/auth.module';
import { AdminModule } from './admin/admin.module';
import { PostsModule } from './posts/posts.module';
import { CategoryModule } from './category/category.module';
import { FundraisersModule } from './fundraisers/fundraisers.module';
import { AdsModule } from './ads/ads.module';
import { AdCategoryModule } from './ad-category/ad-category.module';
import { WithdrawalFormModule } from './withdrawal-form/withdrawal-form.module';
import { DonorsModule } from './donors/donors.module';
import { DonationsModule } from './donations/donations.module';
import { CommentsModule } from './comments/comments.module';
@Module({
  imports: [
    PrismaModule,
    AuthModule,
    AdminModule,
    PostsModule,
    CategoryModule,
    FundraisersModule,
    AdsModule,
    AdCategoryModule,
    WithdrawalFormModule,
    DonorsModule,
    DonationsModule,
    CommentsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
