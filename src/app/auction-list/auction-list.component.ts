import { Component, OnInit, ViewChild } from '@angular/core';
import { AuctionAddComponent } from '../auction-add/auction-add.component';  
import { AuctionDataService } from '../DataService/AuctionDataService'  
import { Auction } from 'src/Models/Auction'  
import { Router } from '@angular/router';  
import { AuctionUpdateComponent } from '../auction-update/auction-update.component';  
import { CurrencyPipe } from '@angular/common';
import { start } from 'repl';


@Component({
  selector: 'app-auction-list',
  templateUrl: './auction-list.component.html',
  styleUrls: ['./auction-list.component.css']
})
export class AuctionListComponent implements OnInit {

  aucList: Auction[];
  dataavailable: Boolean= false
  tempauction: Auction
  constructor(private dataservice: AuctionDataService, private route: Router) { 
  }

  ngOnInit() {
    this.LoadData();
  }

  LoadData() {  
    this.dataservice.getEmployee().subscribe((tempdate) => {  
      this.aucList = tempdate;  
      console.log(this.aucList);  
      if (this.aucList.length > 0) {  
        this.dataavailable = true;  
      }  
      else {  
        this.dataavailable = false;  
      }  
    }  
    )  
      , err => {  
        console.log(err);  
      }  
  }  
  deleteconfirmation(id: string) {  
  
    if (confirm("Are you sure you want to delete this ?")) {  
      this.tempauction = new Auction();  
      this.tempauction.id = id;  
      this.dataservice.DeleteAuction(this.tempauction).subscribe(res => {  
        alert("Leilao Excluido!");  
        this.LoadData();  
      })  
    }  
  }  
  @ViewChild('auctionadd') addcomponent: AuctionAddComponent  
  @ViewChild('regForm') editcomponent: AuctionUpdateComponent  
  loadAddnew() {  
    this.addcomponent.objtempauction.auctionName= "";
    this.addcomponent.objtempauction.initialBet="";
    this.addcomponent.objtempauction.usedItem=0;
    this.addcomponent.objtempauction.auctioneer = "";
    this.addcomponent.objtempauction.startDate = null;
    this.addcomponent.objtempauction.endDate = null;  
  }  
  loadnewForm(id: string, auctionName: string, initialBet: CurrencyPipe, usedItem: number, auctioneer: string, startDate: Date, endDate: Date) {  
    console.log(usedItem);  
    this.editcomponent.objtempauction.auctionName= auctionName;
    this.editcomponent.objtempauction.initialBet= initialBet;
    this.editcomponent.objtempauction.usedItem= usedItem;
    this.editcomponent.objtempauction.auctioneer = auctioneer;
    this.editcomponent.objtempauction.startDate = startDate;
    this.editcomponent.objtempauction.endDate = endDate;  
  }  
  RefreshData() {  
    this.LoadData();  
  }  
}  