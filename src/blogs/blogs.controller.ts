import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseInterceptors,
  UploadedFiles,
} from '@nestjs/common';
import { BlogsService } from './blogs.service';
import { CreateBlogDto } from './dto/create-blog.dto';
import { UpdateBlogDto } from './dto/update-blog.dto';
import { ApiCreatedResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { BlogEntity } from './entities/blog.entity';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller('blogs')
@ApiTags('blog')
export class BlogsController {
  constructor(private readonly blogsService: BlogsService) {}

  @Post()
  @ApiCreatedResponse({ type: BlogEntity })
  @UseInterceptors(FileInterceptor('imageUrl'))
  create(
    @Body() createBlogDto: CreateBlogDto,
    @UploadedFiles() imageUrl: Express.Multer.File[],
  ) {
    return this.blogsService.create(createBlogDto);
  }

  @Get()
  @ApiOkResponse({ type: BlogEntity, isArray: true })
  findAll() {
    return this.blogsService.findAll();
  }

  @Get(':id')
  @ApiOkResponse({ type: BlogEntity, isArray: true })
  findOne(@Param('id') id: string) {
    return this.blogsService.findOne(+id);
  }

  @Patch(':id')
  @ApiOkResponse({ type: BlogEntity })
  update(@Param('id') id: string, @Body() updateBlogDto: UpdateBlogDto) {
    return this.blogsService.update(+id, updateBlogDto);
  }

  @Delete(':id')
  @ApiOkResponse({ type: BlogEntity })
  remove(@Param('id') id: string) {
    return this.blogsService.remove(+id);
  }
}
