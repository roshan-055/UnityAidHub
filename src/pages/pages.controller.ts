import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseInterceptors,
  UploadedFile,
  UploadedFiles,
} from '@nestjs/common';
import { PagesService } from './pages.service';
import { CreatePageDto } from './dto/create-page.dto';
import { UpdatePageDto } from './dto/update-page.dto';
import { ApiCreatedResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { PageEntity } from './entities/page.entity';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller('pages')
@ApiTags('pages')
export class PagesController {
  constructor(private readonly pagesService: PagesService) {}

  @Post()
  @ApiCreatedResponse({ type: PageEntity })
  @UseInterceptors(FileInterceptor('imageUrl'))
  create(
    @Body() createPageDto: CreatePageDto,
    @UploadedFiles() imageUrl: Express.Multer.File[],
  ) {
    return this.pagesService.create(createPageDto);
  }

  @Get()
  @ApiOkResponse({ type: PageEntity, isArray: true })
  findAll() {
    return this.pagesService.findAll();
  }

  @Get(':id')
  @ApiOkResponse({ type: PageEntity })
  findOne(@Param('id') id: string) {
    return this.pagesService.findOne(+id);
  }

  @Patch(':id')
  @ApiOkResponse({ type: PageEntity })
  update(@Param('id') id: string, @Body() updatePageDto: UpdatePageDto) {
    return this.pagesService.update(+id, updatePageDto);
  }

  @Delete(':id')
  @ApiOkResponse({ type: PageEntity })
  remove(@Param('id') id: string) {
    return this.pagesService.remove(+id);
  }
}
