import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Auction } from 'src/Models/Auction';
import { ROOT_URL } from 'src/Models/Config';
import { Observable } from 'rxjs';
@Injectable()
export class AuctionDataService {
  auctions: Observable<Auction[]>;
  newauction: Auction;
  constructor(private http: HttpClient) {
  }

  getAuction() {
    return this.http.get<Auction[]>(ROOT_URL + 'Auction');
  }
  AuctionAdd(auc: Auction) {

    const headers = new HttpHeaders().set('content-type', 'application/json');
    const body = {
      AuctionName: auc.AuctionName,
      InitialBet: auc.InitialBet,
      UsedItem: auc.UsedItem,
      Auctioneer: auc.Auctioneer,
      StartDate: auc.StartDate,
      EndDate: auc.EndDate
    };
    console.log(ROOT_URL);

    return this.http.post<Auction>(ROOT_URL + '/Auction', body, { headers });

  }

  EditAuction(auc: Auction) {
    console.log(auc);
    const params = new HttpParams().set('ID', auc.Id);
    const headers = new HttpHeaders().set('content-type', 'application/json');
    const body = {
      AuctionName: auc.AuctionName,
      InitialBet: auc.InitialBet,
      UsedItem: auc.UsedItem,
      Auctioneer: auc.Auctioneer,
      StartDate: auc.StartDate,
      EndDate: auc.EndDate
    };
    return this.http.put<Auction>(ROOT_URL + 'Auction/' + auc.Id, body, { headers, params });

  }
  DeleteAuction(auc: Auction) {
    const params = new HttpParams().set('ID', auc.Id);
    const headers = new HttpHeaders().set('content-type', 'application/json');
    const body = {
      AuctionName: auc.AuctionName,
      InitialBet: auc.InitialBet,
      UsedItem: auc.UsedItem,
      Auctioneer: auc.Auctioneer,
      StartDate: auc.StartDate,
      EndDate: auc.EndDate
    };
    return this.http.delete<Auction>(ROOT_URL + '/Auction/' + auc.Id);

  }

}
