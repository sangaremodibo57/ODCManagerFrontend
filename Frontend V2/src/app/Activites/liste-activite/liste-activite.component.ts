import { Component, OnInit } from '@angular/core';
import { ActiviteServiceService } from '../Services/activite-service.service';

@Component({
  selector: 'app-liste-activite',
  templateUrl: './liste-activite.component.html',
  styleUrls: ['./liste-activite.component.scss']
})
export class ListeActiviteComponent implements OnInit {
  listes:any;
  
  constructor(
    private service : ActiviteServiceService,
  ) { }

  ngOnInit(): void {
    this.getAll();
  }
  getAll(){
    this.service.getAllList().subscribe((data:any)=> {
      this.listes = data;
      console.log(data);
    })
  }

  deleteList(liste:any){
    this.service.delete(liste.id_activite).subscribe(
      (res)=>{
        console.log(res);
      }
    )
  }

  getExercice(date:any) {
    this.service.exercice(date.year).subscribe((data)=> {
      this.listes = data;
      console.log(data);
    })
  }

  getMonth(date:any) {
    this.service.Month(date.mois).subscribe((data)=> {
      this.listes = data;
      console.log(data);
    })
  }
}
