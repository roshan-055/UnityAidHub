import { Module } from '@nestjs/common';
import { AdCategoryService } from './ad-category.service';
import { AdCategoryController } from './ad-category.controller';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [AdCategoryController],
  providers: [AdCategoryService, PrismaService],
})
export class AdCategoryModule {}
