import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ParticipantServiceService } from '../Services/participant-service.service';

@Component({
  selector: 'app-ajout-participant',
  templateUrl: './ajout-participant.component.html',
  styleUrls: ['./ajout-participant.component.scss']
})
export class AjoutParticipantComponent implements OnInit {
  id_participant:any;
  constructor(
    private service: ParticipantServiceService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  onRegister(form: NgForm){
    console.log(form.value);
    this.service.ajoutParticipant(form.value).subscribe((app: any) =>{
      this.id_participant = app.id;
      this.router.navigate(['liste-participant']);
    })
    
  }

}
