import { Component, OnInit, ViewChild } from '@angular/core';
import { AuctionAddComponent } from '../auction-add/auction-add.component';
import { AuctionDataService } from '../DataService/AuctionDataService';
import { Auction } from 'src/Models/Auction';
import { Router } from '@angular/router';
import { AuctionUpdateComponent } from '../auction-update/auction-update.component';
import { CurrencyPipe } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-auction-list',
  templateUrl: './auction-list.component.html',
  styleUrls: ['./auction-list.component.css']
})
export class AuctionListComponent implements OnInit {

  aucList: Auction[];
  tempauction: Auction;
  dataavailable: boolean;

  @ViewChild('auctionadd', { static: false }) addcomponent: AuctionAddComponent;
  @ViewChild('regForm', { static: false }) editcomponent: AuctionUpdateComponent;

  constructor(private dataservice: AuctionDataService, private route: Router) {
  }

  ngOnInit() {
    this.LoadData();
  }

  LoadData() {
    this.dataservice.getAuction().subscribe((tempdate) => {
      this.aucList = tempdate;
      console.log(this.aucList);
      if (this.aucList.length > 0) {
        this.dataavailable = true;
      } else {
        this.dataavailable = false;
      }
    }, error => {
      console.log(error);
    });
  }
  deleteconfirmation(id: string) {

    if (confirm('Are you sure you want to delete this ?')) {
      this.tempauction = new Auction();
      this.tempauction.Id = id;
      this.dataservice.DeleteAuction(this.tempauction).subscribe(res => {
        alert('Leilao Excluido!');
        this.LoadData();
      });
    }
  }

  loadAddnew() {
    this.addcomponent.objtempauction.AuctionName = '';
    this.addcomponent.objtempauction.InitialBet = null;
    this.addcomponent.objtempauction.UsedItem = 0;
    this.addcomponent.objtempauction.Auctioneer = '';
    this.addcomponent.objtempauction.StartDate = null;
    this.addcomponent.objtempauction.EndDate = null;
  }
  loadnewForm(id: string,
              auctionName: string,
              initialBet: CurrencyPipe,
              usedItem: number,
              auctioneer: string,
              startDate: Date,
              endDate: Date) {
    console.log(usedItem);
    this.editcomponent.objtempauction.AuctionName = auctionName;
    this.editcomponent.objtempauction.InitialBet = initialBet;
    this.editcomponent.objtempauction.UsedItem = usedItem;
    this.editcomponent.objtempauction.Auctioneer = auctioneer;
    this.editcomponent.objtempauction.StartDate = startDate;
    this.editcomponent.objtempauction.EndDate = endDate;
  }
  RefreshData() {
    this.LoadData();
  }
}
