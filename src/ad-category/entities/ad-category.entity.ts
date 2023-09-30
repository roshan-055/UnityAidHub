import { ApiProperty } from '@nestjs/swagger';
import { AdCategory } from '@prisma/client';

export class AdCategoryEntity implements AdCategory {
  @ApiProperty()
  id: number;

  @ApiProperty()
  name: string;
}
