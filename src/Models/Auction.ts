import { DecimalPipe } from '@angular/common';

export class Auction {
  AuctionName: string;
  InitialBet: DecimalPipe;
  UsedItem: number;
  Auctioneer: string;
  StartDate: Date;
  EndDate: Date;
  Id: string;

}
