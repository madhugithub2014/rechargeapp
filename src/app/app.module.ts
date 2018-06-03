import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpModule} from "@angular/http";

import { AppComponent } from './app.component';
import {MobileNumber} from './app.mobile.number';
import {ButtonsModule} from 'ngx-bootstrap';
import {RouterModule,Routes} from '@angular/router';
import {Offers} from './app.recharge.offers';
import { OffersService } from './offers.service';

const rechargeRoutes:Routes = [{path:"offerspage",component:Offers}];
@NgModule({
  declarations: [
    AppComponent,MobileNumber,Offers
  ],
  imports: [
    HttpModule,BrowserModule,ButtonsModule.forRoot(),RouterModule.forRoot(rechargeRoutes,{ enableTracing: true })
  ],
  providers: [OffersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
