import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ParticipantServiceService {
  url= environment.URL;
  constructor(
    private http: HttpClient,
  ) { }
  
  listeparticipant(){
    return this.http.get(this.url + '/participants');
  }
  ajoutParticipant(app:any){
    return this.http.post(this.url + '/participant', app);
  }
}
