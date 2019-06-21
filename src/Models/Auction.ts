import { CurrencyPipe } from '@angular/common';

export class Auction {
  AuctionName: string;
  InitialBet: CurrencyPipe;
  UsedItem: number;
  Auctioneer: string;
  StartDate: Date;
  EndDate: Date;
  Id: string;

}
