import { Test, TestingModule } from '@nestjs/testing';
import { AdCategoryService } from './ad-category.service';

describe('AdCategoryService', () => {
  let service: AdCategoryService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AdCategoryService],
    }).compile();

    service = module.get<AdCategoryService>(AdCategoryService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
