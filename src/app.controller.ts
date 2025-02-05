import { Controller, Post, Body } from '@nestjs/common';
import { AppService } from './app.service';
import { DataDto } from './dto/data.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('data')
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post('data')
  @ApiOperation({ summary: 'Send data to MQTT broker' })
  @ApiResponse({ status: 200, description: 'Data successfully sent' })
  @ApiResponse({ status: 400, description: 'Bad request' })
  async sendData(@Body() data: DataDto) {
    return this.appService.sendData(data);
  }
}
