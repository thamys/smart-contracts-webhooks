import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { WebSocketProvider, Contract, InterfaceAbi } from 'ethers';
import * as ABI from '../abi.json';

@Injectable()
export class AppService {
  private webSocketURL: string;
  private apiKey: string;
  private contractAddress: string =
    '0x337925F8C9F0D9845280b35AD89ccaD034bdA5fe';

  constructor(config: ConfigService) {
    this.webSocketURL = config.get('ALCHEMY_URL_PROVIDER');
    this.apiKey = config.get('ALCHEMY_KEY');
  }
  async getTransfer() {
    const provider = new WebSocketProvider(
      `${this.webSocketURL}/${this.apiKey}`,
    );
    const contract = new Contract(
      this.contractAddress,
      ABI as unknown as InterfaceAbi,
      provider,
    );
    contract.on('InfoChange', (oldInfo, newInfo) => {
      let infoChangeEvent = {
        oldInfo,
        newInfo,
      };
      console.log(JSON.stringify(infoChangeEvent, null, 4));
    });
    return true;
  }
}
