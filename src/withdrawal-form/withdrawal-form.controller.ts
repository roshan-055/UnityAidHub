import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { WithdrawalFormService } from './withdrawal-form.service';
import { CreateWithdrawalFormDto } from './dto/create-withdrawal-form.dto';
import { UpdateWithdrawalFormDto } from './dto/update-withdrawal-form.dto';
import { ApiTags } from '@nestjs/swagger';

@Controller('withdrawal-form')
@ApiTags('withdrawal-form')
export class WithdrawalFormController {
  constructor(private readonly withdrawalFormService: WithdrawalFormService) {}

  @Post()
  create(@Body() createWithdrawalFormDto: CreateWithdrawalFormDto) {
    return this.withdrawalFormService.create(createWithdrawalFormDto);
  }

  @Get()
  findAll() {
    return this.withdrawalFormService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.withdrawalFormService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateWithdrawalFormDto: UpdateWithdrawalFormDto,
  ) {
    return this.withdrawalFormService.update(+id, updateWithdrawalFormDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.withdrawalFormService.remove(+id);
  }
}
