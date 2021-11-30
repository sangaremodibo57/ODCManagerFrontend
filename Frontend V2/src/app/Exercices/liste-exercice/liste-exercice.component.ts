import { Component, OnInit } from '@angular/core';
import { ExerciceServiceService } from '../Services/exercice-service.service';

@Component({
  selector: 'app-liste-exercice',
  templateUrl: './liste-exercice.component.html',
  styleUrls: ['./liste-exercice.component.scss']
})
export class ListeExerciceComponent implements OnInit {
  listeExo : any;
  constructor(
    private service: ExerciceServiceService
  ) { }

  ngOnInit(): void {
      //lancer directement la fonction listeExercices a l'ouverture de la page
      this.listeExercices();
  }
  // Recuperation des données qui se trouve dans la fonction listeExercice par la fonction listeExercices et l'affecter a listeExo
  listeExercices(){
    this.service.listeExercice().subscribe((data:any)=>{
      this.listeExo = data;
    })
  }

  deleteExercice(data: any){
   // this.service.
  }

}
