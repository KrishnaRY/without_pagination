import { Injectable } from '@angular/core';
@Injectable()
export class CheckUserLogin  {
    isUserLoggedIn : boolean;
  constructor() { 
    this.isUserLoggedIn=false;
  }
setUserStaus(isUserLoggedIn:boolean){
    this.isUserLoggedIn=isUserLoggedIn;

}
  getUserStatus() :boolean{
    return this.isUserLoggedIn;
  }
}