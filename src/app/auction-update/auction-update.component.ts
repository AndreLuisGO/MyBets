import { Component, OnInit, ViewChild, Input, EventEmitter, Output, ElementRef } from '@angular/core';
import { AuctionDataService } from '../DataService/AuctionDataService';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Auction } from 'src/Models/Auction';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-auction-update',
  templateUrl: './auction-update.component.html',
  styleUrls: ['./auction-update.component.css']
})
export class AuctionUpdateComponent implements OnInit {

  constructor(private dataService: AuctionDataService, private route: Router) {
  }

  @Output() nameEvent = new EventEmitter<string>();
  @ViewChild('closeBtn', {static : false}) cb: ElementRef;

  @Input() reset = false;
  @ViewChild('regForm', {static : false }) myForm: NgForm;
  @Input() isReset = false;
  tempAuction: Auction;
  @Input() objauc: Auction = new Auction();
  ngOnInit() {
  }

  EditAuction(regForm: NgForm) {
    this.dataService.EditAuction(this.tempAuction).subscribe(res => {
      alert('Leilão alterado com sucesso!');
      this.nameEvent.emit('ccc');
      this.cb.nativeElement.click();

      });
  }}
