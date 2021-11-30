import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ResponsableServiceService } from '../Services/responsable-service.service';

@Component({
  selector: 'app-ajout-responsable',
  templateUrl: './ajout-responsable.component.html',
  styleUrls: ['./ajout-responsable.component.scss']
})
export class AjoutResponsableComponent implements OnInit {
  Responsable: any;
  erreur = '';

  constructor(
    private service : ResponsableServiceService,
    private router : Router
  ) { }

  ngOnInit(): void {
  }

  ajoutResponsables(form: NgForm){
    // if(form.valid){
      this.service.ajoutResponsale(form.value).subscribe((data:any)=>{
      this.Responsable=data;
      this.router.navigate(['liste-responsable'])
      });
    // }else{
    //   // this.erreur = 'Veuillez remplir tous les champs correctement';
    // }
  }
}
