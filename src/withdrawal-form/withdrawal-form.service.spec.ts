import { Test, TestingModule } from '@nestjs/testing';
import { WithdrawalFormService } from './withdrawal-form.service';

describe('WithdrawalFormService', () => {
  let service: WithdrawalFormService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [WithdrawalFormService],
    }).compile();

    service = module.get<WithdrawalFormService>(WithdrawalFormService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
