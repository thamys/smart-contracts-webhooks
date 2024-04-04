import { Controller, Get, UseInterceptors } from '@nestjs/common';
import { AppService } from './app.service';
import { WebhookService } from './webook/webhook.service';
import { WebhookInterceptor } from './webook/webhook.interceptor';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly webhookService: WebhookService,
  ) {}

  @Get('/')
  @UseInterceptors(WebhookInterceptor)
  async getTranfers() {
    return this.appService.getTransfer()
  }
}
