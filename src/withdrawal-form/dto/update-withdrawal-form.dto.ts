import { PartialType } from '@nestjs/swagger';
import { CreateWithdrawalFormDto } from './create-withdrawal-form.dto';

export class UpdateWithdrawalFormDto extends PartialType(CreateWithdrawalFormDto) {}
