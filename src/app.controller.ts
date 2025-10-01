import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return 'hello-world';
  }

  @Get('my-new-route')
  getNewRoute(): string {
    return 'hello-new-route';
  }
}