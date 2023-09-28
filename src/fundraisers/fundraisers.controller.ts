import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { FundraisersService } from './fundraisers.service';
import { CreateFundraiserDto } from './dto/create-fundraiser.dto';
import { UpdateFundraiserDto } from './dto/update-fundraiser.dto';
import { ApiTags } from '@nestjs/swagger';

@Controller('fundraisers')
@ApiTags('Fundraiser')
export class FundraisersController {
  constructor(private readonly fundraisersService: FundraisersService) {}

  @Post()
  create(@Body() createFundraiserDto: CreateFundraiserDto) {
    return this.fundraisersService.create(createFundraiserDto);
  }

  @Get()
  findAll() {
    return this.fundraisersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.fundraisersService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateFundraiserDto: UpdateFundraiserDto,
  ) {
    return this.fundraisersService.update(+id, updateFundraiserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.fundraisersService.remove(+id);
  }
}
