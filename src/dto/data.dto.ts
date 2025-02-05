import { ApiProperty } from '@nestjs/swagger';

export class DataDto {
  @ApiProperty()
  nama: string;

  @ApiProperty()
  email: string;
}
