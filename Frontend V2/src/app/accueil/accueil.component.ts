import { Component, OnInit, ViewChild } from '@angular/core';
import { ActiviteServiceService } from '../Activites/Services/activite-service.service';
import { AccueilServiceService } from './accueil-service.service';
import { Chart} from 'chart.js';

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
  canvas: any;
  ctx: any;
  @ViewChild('mychart') mychart:any;
  canva: any;
  ctxs: any;
  @ViewChild('mycharts') mycharts:any;

  ngAfterViewInit() {
    this.canvas = this.mychart.nativeElement; 
    this.ctx = this.canvas.getContext('2d');

    new Chart(this.ctx, {
      type: 'line',
      data: {
          datasets: [{
              label: 'Femme',
              data: [10, 20, 70, 40,  50, 100, 90, 120, 90, 50, 70, 120],
              backgroundColor: "rgb(223, 91, 4)",
              borderColor: "#007ee7",
              fill: true,
          },
          {
            label: 'Homme',
            data: [10, 90, 30, 80,  50, 60, 100, 80, 70, 100, 20, 120],
            backgroundColor: "#47a0e8",
            borderColor: "#007ee7",
            fill: true,
        }],
          labels: ['Janvier', 'Fevrier', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Aout', 'Septembre', 'Octobre', 'Novembre', 'Decembre']
      },
  });





    this.canva = this.mycharts.nativeElement; 
    this.ctxs = this.canva.getContext('2d');

    new Chart(this.ctxs, {
      type: 'bar',
      data: {
          datasets: [{
              label: 'Activité',
              data: [0, 2, 4, 3,  2, 4, 3, 1, 5, 3, 1, 5],
              backgroundColor: "rgb(223, 91, 4)",
              borderColor: "#007ee7",
              // fill: true,
          }],
          labels: ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D']
      },
  });
  }

  constructor(
    private mService: AccueilServiceService,
    private  acservice : ActiviteServiceService,
    ) { }

  ngOnInit() {
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

}