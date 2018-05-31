import {Component,OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Offer} from './offer';
import {OffersService} from './offers.service';


@Component({
    selector:'offers-page',
    templateUrl:'./app.recharge.offers.html',
    styleUrls:['./app.recharge.offers.css']
})

export class offers{
    title="welcome to offers!";
    amount;
    description;
    constructor(private _router:Router,private _offer:OffersService){}
    offers(type):void{
     this._offer.getOffers(type).subscribe(details => {
      this.amount=details.amount;
      this.description.description=details.description;
     });
    }
    payment(amount):void{
        this._router.navigate(["payment"]);
    }
}
