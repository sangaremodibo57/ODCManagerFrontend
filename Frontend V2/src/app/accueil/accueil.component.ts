import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.scss']
})
export class AccueilComponent implements OnInit {
  public activityTotal: any = 0;
  public activityAchieved: any = 0;
  public activityPercentage: any = 0;
  constructor() { }

  ngOnInit(): void {
    this.activityTotal = 110;
    this.activityAchieved = 50;
    this.activityPercentage = Math.floor((this.activityAchieved/this.activityTotal)*100);
  }

}
