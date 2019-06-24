import { Component, OnInit, Input, ViewChild, ElementRef, EventEmitter, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Auction } from 'src/Models/Auction';
import { Router } from '@angular/router';
import { AuctionDataService } from '../DataService/AuctionDataService';
import {FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-auction-add',
  templateUrl: './auction-add.component.html',
  styleUrls: ['./auction-add.component.css']
})
export class AuctionAddComponent implements OnInit {


  @Input() cleardata = false;
  @Output() nameEvent = new EventEmitter<string>();
  tempAuction: Auction;
  @Input() objauc: Auction = new Auction();
  @ViewChild('closeBtn', {static: false}) cb: ElementRef;

constructor(private dataService: AuctionDataService, 
            private route: Router,
            private toastr: ToastrService) {

}
ngOnInit() {
  this.resetForm();
}

resetForm(form?: NgForm) {
  if (form != null) {
  form.resetForm();
  }
  this.dataService.newAuction = {
    AuctionName : '',
    InitialBet: 0.00,
    UsedItem: 0,
    Auctioneer: '',
    StartDate: new Date('01/01/0001'),
    EndDate: new Date('01/01/0001'),
    Id: 0
  };
}


Register(regForm: NgForm) {
  this.tempAuction = new Auction();
  this.tempAuction.AuctionName = regForm.value.auctionName;
  this.tempAuction.InitialBet = regForm.value.initialBet;
  this.tempAuction.UsedItem = regForm.value.usedItem;
  this.tempAuction.Auctioneer = regForm.value.auctioneer;
  this.tempAuction.StartDate = regForm.value.startDate;
  this.tempAuction.EndDate = regForm.value.endDate;

  this.dataService.AuctionAdd(this.tempAuction).subscribe(res => {
    alert('Leilão Registrado!')
    this.toastr.success('Leilão Registrado!')
    this.TakeHome();
  }
  );
}
TakeHome() {
  this.nameEvent.emit('ccc');
  this.cb.nativeElement.click();
  this.route.navigateByUrl('');
}
}
