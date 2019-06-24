import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Auction } from 'src/Models/Auction';
import { ROOT_URL } from 'src/Models/Config';
import { Observable } from 'rxjs';
@Injectable()
export class AuctionDataService {
  auctions: Auction[];
  newAuction: Auction;
  constructor(private http: HttpClient) {
  }

  getAuction(): Observable<Auction[]>{
    return this.http.get<Auction[]>(ROOT_URL + 'Auctions');
  }
  AuctionAdd(newAuction: Auction) {

    const headers = new HttpHeaders().set('content-type', 'application/json');
    const body = {
      AuctionName: this.newAuction.AuctionName,
      InitialBet: this.newAuction.InitialBet,
      UsedItem: this.newAuction.UsedItem,
      Auctioneer: this.newAuction.Auctioneer,
      StartDate: this.newAuction.StartDate, 
      EndDate: this.newAuction.EndDate
    };
    console.log(ROOT_URL);

    return this.http.post<Auction>(ROOT_URL + 'Auctions', body, { headers });

  }

  EditAuction(auc: Auction) {
    console.log(auc);
    const params = new HttpParams().set('ID', auc.Id.toString());
    const headers = new HttpHeaders().set('content-type', 'application/json');
    const body = {
      AuctionName: auc.AuctionName,
      InitialBet: auc.InitialBet,
      UsedItem: auc.UsedItem,
      Auctioneer: auc.Auctioneer,
      StartDate: auc.StartDate,
      EndDate: auc.EndDate
    };
    return this.http.put<Auction>(ROOT_URL + 'Auctions/' + auc.Id, body, { headers, params });

  }
  DeleteAuction(auc: Auction) {
    const params = new HttpParams().set('ID', auc.Id.toString());
    const headers = new HttpHeaders().set('content-type', 'application/json');
    const body = {
      AuctionName: auc.AuctionName,
      InitialBet: auc.InitialBet,
      UsedItem: auc.UsedItem,
      Auctioneer: auc.Auctioneer,
      StartDate: auc.StartDate,
      EndDate: auc.EndDate
    };
    return this.http.delete<Auction>(ROOT_URL + 'Auctions/' + auc.Id);

  }

}
