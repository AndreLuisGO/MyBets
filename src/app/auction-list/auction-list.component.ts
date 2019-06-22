import { Component, OnInit, ViewChild } from '@angular/core';
import { AuctionAddComponent } from '../auction-add/auction-add.component';
import { AuctionDataService } from '../DataService/AuctionDataService';
import { Auction } from 'src/Models/Auction';
import { Router } from '@angular/router';
import { AuctionUpdateComponent } from '../auction-update/auction-update.component';
import { DecimalPipe } from '@angular/common';
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
    this.addcomponent.tempauction = new Auction();
  }
  loadnewForm(id: string,
              auctionName: string,
              initialBet: DecimalPipe,
              usedItem: number,
              auctioneer: string,
              startDate: Date,
              endDate: Date) {
    console.log(usedItem);
    this.editcomponent.tempauction.AuctionName = auctionName;
    this.editcomponent.tempauction.InitialBet = initialBet;
    this.editcomponent.tempauction.UsedItem = usedItem;
    this.editcomponent.tempauction.Auctioneer = auctioneer;
    this.editcomponent.tempauction.StartDate = startDate;
    this.editcomponent.tempauction.EndDate = endDate;
  }
  RefreshData() {
    this.LoadData();
  }
}
