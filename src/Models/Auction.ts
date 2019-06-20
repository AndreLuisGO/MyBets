import { CurrencyPipe } from '@angular/common';

export class Auction{
  auctionName:string;
  initialBet: CurrencyPipe;
  usedItem: number;
  auctioneer: string;
  startDate: Date;
  endDate: Date;
  id: string
  
}