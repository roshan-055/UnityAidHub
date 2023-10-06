import { Test, TestingModule } from '@nestjs/testing';
import { WithdrawalFormController } from './withdrawal-form.controller';
import { WithdrawalFormService } from './withdrawal-form.service';

describe('WithdrawalFormController', () => {
  let controller: WithdrawalFormController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [WithdrawalFormController],
      providers: [WithdrawalFormService],
    }).compile();

    controller = module.get<WithdrawalFormController>(WithdrawalFormController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
