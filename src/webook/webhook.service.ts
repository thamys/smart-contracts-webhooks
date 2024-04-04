import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class WebhookService {
  constructor(private readonly httpService: HttpService) {}

  async notifyShippingApplication(data) {
    // Define the webhook URL
    const webhookUrl =
      'https://webhook.site/dc57fb95-d0e5-4fb7-9c95-1da986fd7a9a';

    // Send the data to the webhook
    // await firstValueFrom(this.httpService.post(webhookUrl, data));
  }
}
