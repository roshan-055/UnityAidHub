import { Module } from '@nestjs/common';
import { FundraisersService } from './fundraisers.service';
import { FundraisersController } from './fundraisers.controller';
import { PrismaService } from 'src/prisma/prisma.service';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [FundraisersController],
  providers: [FundraisersService, PrismaService],
})
export class FundraisersModule {}
