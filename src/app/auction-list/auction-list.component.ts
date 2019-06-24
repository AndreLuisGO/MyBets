import { Component, OnInit, ViewChild } from '@angular/core';
import { AuctionAddComponent } from '../auction-add/auction-add.component';
import { AuctionDataService } from '../DataService/AuctionDataService';
import { Auction } from 'src/Models/Auction';
import { Router } from '@angular/router';
import { AuctionUpdateComponent } from '../auction-update/auction-update.component';
import { DecimalPipe } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';


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

  constructor(private dataService: AuctionDataService, private route: Router, private toastr: ToastrService) {
  }

  ngOnInit() {
    this.dataService.getAuction()
      .subscribe(data => this.aucList = data);
  }

  deleteconfirmation(id: number) {

    if (confirm('Tem certeza que deseja excluir este registro ?')) {
      this.dataService.DeleteAuction(id).subscribe(res => {
        this.ngOnInit();
        this.toastr.warning('Leilão Excluído!');
      });
    }
  }

  loadAddNew() {
    this.addcomponent.tempAuction = new Auction();
  }
  loadNewForm(auc: Auction) {
    this.addcomponent.tempAuction = auc;
  }
  RefreshData() {
    this.dataService.getAuction();
  }
}
