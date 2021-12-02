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
  // --------------------------
  canvas: any;
  ctx: any;
  @ViewChild('mychart') mychart:any;

  ngAfterViewInit() {
    this.canvas = this.mychart.nativeElement; 
    this.ctx = this.canvas.getContext('2d');

    new Chart(this.ctx, {
      type: 'line',
      data: {
          datasets: [{
              label: 'Femme',
              data: [0, 20, 40, 30,  20, 40, 30],
              backgroundColor: "rgb(223, 91, 4)",
              borderColor: "#007ee7",
              fill: true,
          },
          {
            label: 'Homme',
            data: [0, 20, 40, 60, 10, 20, 40, 60, 10],
            backgroundColor: "#47a0e8",
            borderColor: "#007ee7",
            fill: true,
        }],
          labels: ['Janvier', 'Fevrier', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Aout', 'Septembre', 'Octobre', 'Novembre', 'Decembre']
      },
  });
  }
  // ------------------------
  listeAct : any;
  listes : any;
  public totalHomme: any;
  public totalFemme: any;
  constructor(
    private mService: AccueilServiceService,
    private  acservice : ActiviteServiceService,
    ) { }

  ngOnInit() {
// ---------------------------




    // --------------------------
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