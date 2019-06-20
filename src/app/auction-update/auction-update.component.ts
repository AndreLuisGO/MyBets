import { Component, OnInit, ViewChild, Input, EventEmitter, Output, ElementRef } from '@angular/core';  
import { AuctionDataService } from '../DataService/AuctionDataService';  
import { Router } from '@angular/router';  
import { NgForm } from '@angular/forms';  
import { Employee } from 'src/Models/Auction';  

@Component({
  selector: 'app-auction-update',
  templateUrl: './auction-update.component.html',
  styleUrls: ['./auction-update.component.css']
})
export class AuctionUpdateComponent implements OnInit {

  constructor(private dataservice:AuctionDataService,private route:Router) {  
  }  
  @Output() nameEvent = new EventEmitter<string>();  
  @ViewChild('closeBtn') cb: ElementRef;  
  ngOnInit() {  
  }  
  @Input() reset:boolean = false;  
  @ViewChild('regForm') myForm: NgForm;  
  @Input() isReset: boolean = false;  
  objtempauction:Auction;  
  @Input() objtempauction :Auction=new Auction();  
  EditEmployee(regForm:NgForm)  
  {  
    this.dataservice.EditAuction(this.objtempauction).subscribe(res=>  
      {  
      alert("Leilao adicionado com sucesso!");  
      this.nameEvent.emit("ccc");  
      this.cb.nativeElement.click();  
       
      },  
  };  
}  