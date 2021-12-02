import { Component, OnInit } from '@angular/core';
import { ActiviteServiceService } from '../Activites/Services/activite-service.service';
import { AccueilServiceService } from './accueil-service.service';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.scss']
})
export class AccueilComponent implements OnInit {
  listeAct : any;
  listes : any;
  public totalHomme: any;
  public totalFemme: any;
  constructor(
    private mService: AccueilServiceService,
    private  acservice : ActiviteServiceService,
    ) { }

  ngOnInit() {
    this.ActiviteOfDate();
    this.mService.getHomme().subscribe(
      (result) => {
        this.totalHomme = result
        console.log(this.totalHomme);
        
      }
    );
    this.mService.getFemme().subscribe((data)=>{
      this.totalFemme = data
      console.log('Femme',this.totalFemme);
      
    });
  }

  ActiviteOfDate(){
    return this.acservice.getAllList().subscribe((data)=>{
      this.listeAct = data;
    })
  }

   getMonth(date:any) {
    this.acservice.Month(date.mois).subscribe((data)=> {
      this.listes = data;
      
    })
  }

}