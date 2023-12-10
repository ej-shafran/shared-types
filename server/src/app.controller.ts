import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import type { User } from '#types';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get()
  get(): User {
    return this.appService.readOneUser();
  }
}
