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
  tempAuction: Auction;
  dataavailable: boolean;

  @ViewChild('auctionadd', { static: false }) addcomponent: AuctionAddComponent;
  @ViewChild('regForm', { static: false }) editcomponent: AuctionUpdateComponent;

  constructor(private dataService: AuctionDataService, private route: Router) {
  }

  ngOnInit() {
    this.dataService.getAuction()
      .subscribe(data => this.aucList = data);
  }

  deleteconfirmation(id: number) {

    if (confirm('Tem certeza que deseja excluir este registro ?')) {
      this.tempAuction = new Auction();
      this.tempAuction.Id = id;
      this.dataService.DeleteAuction(this.tempAuction).subscribe(res => {
        alert('Leilao Excluído!');
        this.dataService.getAuction();
      });
    }
  }

  loadAddnew() {
    this.addcomponent.tempAuction = new Auction();
  }
  loadnewForm(id: number,
              auctionName: string,
              initialBet: number,
              usedItem: number,
              auctioneer: string,
              startDate: Date,
              endDate: Date) {
    console.log(usedItem);
    this.editcomponent.tempAuction.AuctionName = auctionName;
    this.editcomponent.tempAuction.InitialBet = initialBet;
    this.editcomponent.tempAuction.UsedItem = usedItem;
    this.editcomponent.tempAuction.Auctioneer = auctioneer;
    this.editcomponent.tempAuction.StartDate = startDate;
    this.editcomponent.tempAuction.EndDate = endDate;
  }
  RefreshData() {
    this.dataService.getAuction();
  }
}
