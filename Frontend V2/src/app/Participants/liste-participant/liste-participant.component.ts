import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ParticipantServiceService } from '../Services/participant-service.service';

@Component({
  selector: 'app-liste-participant',
  templateUrl: './liste-participant.component.html',
  styleUrls: ['./liste-participant.component.scss']
})
export class ListeParticipantComponent implements OnInit {
  listpart: any;
  id: any;
  participant:any;
  constructor(
    private service : ParticipantServiceService,
    public route: Router,
  ) { }

  ngOnInit(): void {
    this.listepart();
  }
  
  
  async listepart(){
    this.service.listeparticipant().subscribe((res:any) =>{
      this.listpart = res;
      //console.log(this.listpart);
      
    })
  }
}
