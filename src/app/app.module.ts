import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuctionAddComponent } from './auction-add/auction-add.component';
import { AuctionUpdateComponent } from './auction-update/auction-update.component';
import { AuctionListComponent } from './auction-list/auction-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AuctionDataService } from './DataService/AuctionDataService';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [
    AppComponent,
    AuctionAddComponent,
    AuctionUpdateComponent,
    AuctionListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  providers: [AuctionDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
