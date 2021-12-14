import { Component, OnInit } from '@angular/core';
import { ActiviteServiceService } from '../Activites/Services/activite-service.service';
import { AccueilServiceService } from './accueil-service.service';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.scss']
})
export class AccueilComponent implements OnInit {
  listeExo : any;
  listpart : any;
  listeAct : any;
  listes : any;
  liste : any;
  nbreActivite = 0;
  nbreParticipant = 0;
  public totalHomme: any;
  public totalFemme: any;
  constructor(
    private mService: AccueilServiceService,
    private  acservice : ActiviteServiceService,
    ) { }

  ngOnInit(): void {
    this.listepart();
    this.getAll();
    this.ActiviteOfDate();
    this.mService.getHomme().subscribe(
      (result) => {
        this.totalHomme = result
      }
    );
    this.totalFemme = this.mService.getFemme().subscribe(
      (result) => {
        this.totalHomme = result
      }
    );
    console.log(this.totalHomme);
    console.log(this.totalFemme);
  }

  ActiviteOfDate(){
    return this.acservice.getAllList().subscribe((data)=>{
      this.listeAct = data;
    })
  }

   getMonth(date:any) {
    this.acservice.Month(date.mois).subscribe((data)=> {
      this.listes = data;
      console.log(data);
    })
  }

  getAll(){
    this.acservice.getAllList().subscribe((data:any)=> {
      this.listes = data;
      console.log('-----------' ,data.length);
      for(let i = 0; i<this.listes.length; i++){
        this.nbreActivite = this.nbreActivite +1;
        }
    })
  }

  async listepart(){
    this.mService.listeparticipant().subscribe((res:any) =>{
      this.liste = res;
      for(let i = 0; i<this.liste.length; i++){
        this.nbreParticipant = this.nbreParticipant +1;
        }
    })
  }

}