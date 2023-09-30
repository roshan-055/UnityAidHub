import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AdCategoryService } from './ad-category.service';
import { CreateAdCategoryDto } from './dto/create-ad-category.dto';
import { UpdateAdCategoryDto } from './dto/update-ad-category.dto';
import { ApiCreatedResponse, ApiTags, ApiOkResponse } from '@nestjs/swagger';
import { AdCategoryEntity } from './entities/ad-category.entity';

@Controller('ad-category')
@ApiTags('AdsCategory')
export class AdCategoryController {
  constructor(private readonly adCategoryService: AdCategoryService) {}

  @Post()
  @ApiCreatedResponse({ type: AdCategoryEntity })
  create(@Body() createAdCategoryDto: CreateAdCategoryDto) {
    return this.adCategoryService.createAdCategory(createAdCategoryDto);
  }

  @Get()
  @ApiOkResponse({ type: AdCategoryEntity, isArray: true })
  findAll() {
    return this.adCategoryService.findAll();
  }

  @Get(':id')
  @ApiOkResponse({ type: AdCategoryEntity })
  findOne(@Param('id') id: string) {
    return this.adCategoryService.findOne(+id);
  }

  @Patch(':id')
  @ApiOkResponse({ type: AdCategoryEntity })
  update(@Param('id') id: string, @Body() updateAdCategoryDto: UpdateAdCategoryDto) {
    return this.adCategoryService.updateAdCategory(+id, updateAdCategoryDto);
  }

  @Delete(':id')
  @ApiOkResponse({ type: AdCategoryEntity })
  remove(@Param('id') id: string) {
    return this.adCategoryService.removeAdCategory(+id);
  }
}
