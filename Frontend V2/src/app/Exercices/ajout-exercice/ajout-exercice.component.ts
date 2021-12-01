import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import * as moment from 'moment';
import { Exercice } from 'src/app/Models/Exercice';
import { ExerciceServiceService } from '../Services/exercice-service.service';

@Component({
  selector: 'app-ajout-exercice',
  templateUrl: './ajout-exercice.component.html',
  styleUrls: ['./ajout-exercice.component.scss']
})
export class AjoutExerciceComponent implements OnInit {

  // str: any;
  // str_filtre = str.substring(1,2);
  exercice : any;
  exo = new Exercice();
  erreur = '';
  erreurIsExo='';
  isExo: any;
  constructor(
    private service : ExerciceServiceService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.annee();
  }

  ajoutExercice(form: NgForm){
    if(form.valid){
     
      if(moment(form.value['date_debut']).isBefore(form.value['date_fin'])){
        
        if(form.value['annee'] == form.value['date_debut'].substring(0,4)){
          this.exo.annee = form.value['annee'];
          this.exo.date_debut = form.value['date_debut'];
          this.exo.date_fin = form.value['date_fin'];
          this.exo.statut = 'encours';
          this.exo.etat = 'active';
          //console.log(form.value['date_debut']);
  
          
           this.service.RechercheExercice(this.exo.annee).subscribe((data: any)=>{
            this.isExo = data;
             if(this.exo){
               this.erreurIsExo = "Cet exercice existe déjà !"
             }else{
                this.service.ajoutExercice(this.exo).subscribe((data: any)=>{
                this.exercice = data;
                this.router.navigate(['liste-exercice']);
                });
             }
            
           })

        }else{
          console.log("false");
          this.erreur = "  La date de debut est hors de l'année de l'exercice ";
        }
        
    }else{
      console.log("false");
      this.erreur = 'La date de debut doit être inferieure à la date de fin';
    }
    }   
  }

  annee(){
    let i: any;
    let startYear = new Date().getFullYear();
    let endYear = new Date().getFullYear() + 5;
    for (i = startYear; i <= endYear; i++)
    {
      $('#years').append($('<option />').val(i).html(i));
    }
  }

}
