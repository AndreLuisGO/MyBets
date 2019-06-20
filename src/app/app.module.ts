import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuctionComponent } from './auction/auction.component';
import { LoginComponent } from './login/login.component';
import { AuctionCrudComponent } from './auction-crud/auction-crud.component';
import { AuctionAddComponent } from './auction-add/auction-add.component';
import { AuctionUpdateComponent } from './auction-update/auction-update.component';
import { AuctionListComponent } from './auction-list/auction-list.component';

@NgModule({
  declarations: [
    AppComponent,
    AuctionComponent,
    LoginComponent,
    AuctionCrudComponent,
    AuctionAddComponent,
    AuctionUpdateComponent,
    AuctionListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
