import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuctionListComponent } from './auction-list/auction-list.component';
import { AuctionUpdateComponent } from './auction-update/auction-update.component';
import { AuctionAddComponent} from './auction-add/auction-add.component';


const routes: Routes = [{path: '', component: AuctionListComponent},
                        {path: 'Edit', component: AuctionUpdateComponent},
                        {path: 'Add', component: AuctionAddComponent},
                        {path: 'Home', component: AuctionListComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
