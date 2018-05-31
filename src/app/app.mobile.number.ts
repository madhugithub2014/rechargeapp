import {Component} from '@angular/core';
import {Router} from '@angular/router';

@Component({
    selector:'mobile-number',
    templateUrl:'./app.mobile.number.html',
    styleUrls:["./app.mobile.number.css"]
})
export class MobileNumber{
title = "welcome to recharge!";
constructor(private _router:Router){}
public numberbx:boolean = false;
recharge():void{
    if(!this.numberbx){        
this._router.navigate(["offerspage"]);
this.numberbx=true;
}
}
}