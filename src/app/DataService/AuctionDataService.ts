import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';  
import { Injectable } from '@angular/core';  
import { Auction } from 'src/Models/Auction'  
import { ROOT_URL } from 'src/Models/Config'  
import { Observable } from 'rxjs';  
@Injectable()  
export class AuctionDataService {  
  employees: Observable<Auction[]>;  
  newemployee: Auction;  
  constructor(private http: HttpClient) {  
  
  }  
  
  getEmployee() {  
    return this.http.get<Auction[]>(ROOT_URL + 'Auctions');  
  }  
  AddEmployee(auc: Auction) {  
  
    const headers = new HttpHeaders().set('content-type', 'application/json');  
    var body = {  
      Auctioname: auc.auctionName, InitBet: auc.initialBet, UsedItem: auc.usedItem, Auctioneer: auc.auctioneer, StartDate: auc.startDate, EndDate:auc.endDate  
    }  
    console.log(ROOT_URL);  
  
    return this.http.post<Auction>(ROOT_URL + '/Auctions', body, { headers });  
  
  }  
  
  ///  
  EditEmployee(auc: Auction) {  
    console.log(auc);  
    const params = new HttpParams().set('ID', auc.id);  
    const headers = new HttpHeaders().set('content-type', 'application/json');  
    var body = {  
      Auctioname: auc.auctionName, InitBet: auc.initialBet, UsedItem: auc.usedItem, Auctioneer: auc.auctioneer, StartDate: auc.startDate, EndDate:auc.endDate  
    }  
    return this.http.put<Auction>(ROOT_URL + 'Auctions/' + auc.id, body, { headers, params })  
  
  }  
  DeleteEmployee(auc: Auction) {  
    const params = new HttpParams().set('ID', auc.id);  
    const headers = new HttpHeaders().set('content-type', 'application/json');  
    var body = {  
      Auctioname: auc.auctionName, InitBet: auc.initialBet, UsedItem: auc.usedItem, Auctioneer: auc.auctioneer, StartDate: auc.startDate, EndDate:auc.endDate  
    }  
    return this.http.delete<Auction>(ROOT_URL + '/Auctions/' + auc.id)  
  
  }  
  
}  