import { Module } from '@nestjs/common';
import { WithdrawalFormService } from './withdrawal-form.service';
import { WithdrawalFormController } from './withdrawal-form.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [WithdrawalFormController],
  providers: [WithdrawalFormService],
})
export class WithdrawalFormModule {}
