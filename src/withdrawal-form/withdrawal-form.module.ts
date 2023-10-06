import { Module } from '@nestjs/common';
import { WithdrawalFormService } from './withdrawal-form.service';
import { WithdrawalFormController } from './withdrawal-form.controller';

@Module({
  controllers: [WithdrawalFormController],
  providers: [WithdrawalFormService],
})
export class WithdrawalFormModule {}
