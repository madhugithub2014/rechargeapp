import {Component,OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Offer} from './offer';
import {OffersService} from './offers.service';


@Component({
    selector:'offers-page',
    templateUrl:'./app.recharge.offers.html',
    styleUrls:['./app.recharge.offers.css'],
	providers: [OffersService]
})

export class Offers implements OnInit{    
    title="welcome to offers!";
	offerArr:Offer;
    id:string;
    names:string[];
    description:string;
    pack:any[];
    constructor(private _router:Router,private _offerService:OffersService){}
    ngOnInit(): void{
     this._offerService.getOffers().subscribe(offerArr => {
	  let offer = offerArr[0];
      this.id=offer.id;
      this.names=offer.names;
      this.description=offer.description;
      this.pack=offer.pack;
     });
    }
    payment(amount):void{
        this._router.navigate(["payment"]);
    }
}
