import { PartialType } from '@nestjs/swagger';
import { CreateAdCategoryDto } from './create-ad-category.dto';

export class UpdateAdCategoryDto extends PartialType(CreateAdCategoryDto) {}
