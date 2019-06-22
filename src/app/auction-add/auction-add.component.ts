import { Component, OnInit, Input, ViewChild, ElementRef, EventEmitter, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Auction } from 'src/Models/Auction';
import { Router } from '@angular/router';
import { AuctionDataService } from '../DataService/AuctionDataService';
import {FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-auction-add',
  templateUrl: './auction-add.component.html',
  styleUrls: ['./auction-add.component.css']
})
export class AuctionAddComponent implements OnInit {


  @Input() cleardata = false;
  @Output() nameEvent = new EventEmitter<string>();
  tempauction: Auction;
  @Input() objauc: Auction = new Auction();
  @ViewChild('closeBtn', {static: false}) cb: ElementRef;

constructor(private dataService: AuctionDataService, private route: Router) {

}
ngOnInit() {

}
Register(regForm: NgForm) {
  this.tempauction = new Auction();
  this.tempauction.AuctionName = regForm.value.endDate;
  this.tempauction.InitialBet = regForm.value.initialBet;
  this.tempauction.UsedItem = regForm.value.usedItem;
  this.tempauction.Auctioneer = regForm.value.auctioneer;
  this.tempauction.StartDate = regForm.value.startDate;
  this.tempauction.EndDate = regForm.value.endDate;

  this.dataService.AuctionAdd(this.tempauction).subscribe(res => {
    alert('Leilao registrado com sucesso!');
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
