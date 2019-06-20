import { Component, OnInit, Input, ViewChild, ElementRef, EventEmitter, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Auction } from 'src/Models/Auction';
import { Router } from '@angular/router';
import { AuctionDataService } from '../DataService/AuctionDataService';

@Component({
  selector: 'app-auction-add',
  templateUrl: './auction-add.component.html',
  styleUrls: ['./auction-add.component.css']
})
export class AuctionAddComponent implements OnInit {


  @Input() cleardata = false;
  @Output() nameEvent= new EventEmitter<string>();
  objtempauction: Auction;
  @Input() objauc: Auction = new Auction(); 
  @ViewChild('closeBtn', {static: false}) cb: ElementRef;

constructor(private dataService: AuctionDataService, private route: Router) {

}
ngOnInit() {

}
Register(regForm: NgForm){
  this.objtempauction = new Auction();
  this.objtempauction.auctionName = regForm.value.auctionName;
  this.objtempauction.initialBet = regForm.value.initialBet;
  this.objtempauction.usedItem = regForm.value.usedItem;
  this.objtempauction.auctioneer = regForm.value.auctioneer;
  this.objtempauction.startDate = regForm.value.startDate;
  this.objtempauction.endDate = regForm.value.endDate;

  this.dataService.AddAuction(this.objtempauction).subscribe(res => {
    alert('Leilao registrado com sucesso!');
    this.TakeHome();
  }
  )
}
TakeHome(){
  this.nameEvent.emit('ccc');
  this.cb.nativeElement.click();
  this.route.navigateByUrl('');
}
}
