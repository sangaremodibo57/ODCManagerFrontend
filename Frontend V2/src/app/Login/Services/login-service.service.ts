import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {
  host: String = 'http://localhost:8088/odcmanager/api/v1';

  constructor(private http: HttpClient) { }

  public verifier(data: any) {
    console.log(data);
    return this.http.post(this.host+'/authenticate', data)
  }

  public SetLogin(login: string) {
    localStorage.setItem("login", login)
  }

  public getLogin(){
    return localStorage.getItem("login")
  }

  public SetPassword(password: string) {
    localStorage.setItem("password", password)
  }

  public getPassword(){
    return localStorage.getItem("password")
  }
}
