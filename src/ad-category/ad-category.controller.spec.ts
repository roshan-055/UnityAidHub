import { Test, TestingModule } from '@nestjs/testing';
import { AdCategoryController } from './ad-category.controller';
import { AdCategoryService } from './ad-category.service';

describe('AdCategoryController', () => {
  let controller: AdCategoryController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AdCategoryController],
      providers: [AdCategoryService],
    }).compile();

    controller = module.get<AdCategoryController>(AdCategoryController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
