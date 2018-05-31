import { Injectable } from '@angular/core';
import { Http,Response} from '@angular/http';
import { Observable} from 'rxjs/observable';
import { Offer} from './offer';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

const API_URL = 'http://localhost:9000/api/recharge/v1/ind/offers/9916441110';

@Injectable()
export class OffersService {
  
  constructor(private _http:Http) { }

  getOffers(type):Observable<Offer>{
    return this._http.get(API_URL).map(response => {
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
