import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { PostsService } from './posts.service';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { PostEntity } from './entities/post.entity';

@Controller('posts')
@ApiTags('Post')
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

  @Post()
  create(@Body() createPostDto: CreatePostDto) {
    return this.postsService.create(createPostDto);
  }

  @Get()
  @ApiOkResponse({ type: PostEntity, isArray: true })
  findAll() {
    return this.postsService.findAll();
  }

  @Get('/category/:id')
  @ApiOkResponse({ type: PostEntity })
  findPostByCategoryId(@Param('id') id: string) {
    return this.postsService.findPostByCategoryId(+id);
  }

  @Get('/verified')
  @ApiOkResponse({ type: PostEntity })
  findVerifiedPosts() {
    return this.postsService.findVerifiedPosts();
  }

  @Get('/notverified')
  @ApiOkResponse({ type: PostEntity })
  findNotverifiedPosts() {
    return this.postsService.findNotverifiedPosts();
  }

  @Get(':id')
  @ApiOkResponse({ type: PostEntity, isArray: true })
  findOne(@Param('id') id: string) {
    return this.postsService.findOne(+id);
  }

  @Patch(':id')
  @ApiOkResponse({ type: PostEntity, isArray: true })
  update(@Param('id') id: string, @Body() updatePostDto: UpdatePostDto) {
    return this.postsService.update(+id, updatePostDto);
  }

  @Delete(':id')
  @ApiOkResponse({ type: PostEntity, isArray: true })
  remove(@Param('id') id: string) {
    return this.postsService.remove(+id);
  }
}
