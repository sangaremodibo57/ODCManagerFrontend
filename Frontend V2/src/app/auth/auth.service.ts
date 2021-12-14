import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  logIn: any;
  token: any;

  constructor() { }

  isLoggedIn() {
    this.logIn = localStorage.getItem('userData');
    this.token = JSON.parse(this.logIn);
    if (this.token['userData'] === undefined) {
      return of(true).pipe(delay(500));
    }else{
      return of(false).pipe(delay(500));
    }
  }

  hasPermissions(){
    return of(true);
  }
}
