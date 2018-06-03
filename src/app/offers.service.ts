import { Injectable } from '@angular/core';
import { Http,Response,Headers, URLSearchParams, RequestOptions} from '@angular/http';
import { Observable } from 'rxjs/Rx'
import { Offer} from './offer';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

const API_URL = 'http://localhost:7211/recharge/v1/ind/offers';

@Injectable()
export class OffersService {
  
  constructor(private _http:Http) { }

  getOffers():Observable<Offer>{
  let cpHeaders = new Headers({ 'Content-Type': 'application/json' });
	let options = new RequestOptions({ headers: cpHeaders });
    return this._http.get(API_URL,options).map(response => {
      const offers = response.json();
        return offers.map((offer) => new Offer(offer));
    })
    .catch(this.handleError);
  }

  private handleError (error: Response | any) {
    console.error('OffersService::handleError', error);
    return Observable.throw(error);
  }

}
