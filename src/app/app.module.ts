import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpModule, RequestOptions, XHRBackend, Http} from "@angular/http";

import { AppComponent } from './app.component';
import {MobileNumber} from './app.mobile.number';
import {ButtonsModule} from 'ngx-bootstrap';
import {RouterModule,Routes} from '@angular/router';
import {offers} from './app.recharge.offers';
import { OffersService } from './offers.service';

const rechargeRoutes:Routes = [{path:"offerspage",component:offers}];
@NgModule({
  declarations: [
    AppComponent,MobileNumber,offers
  ],
  imports: [
    HttpModule,BrowserModule,ButtonsModule.forRoot(),RouterModule.forRoot(rechargeRoutes,{ enableTracing: true })
  ],
  providers: [OffersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
