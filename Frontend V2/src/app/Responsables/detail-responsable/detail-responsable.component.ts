import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ActiviteServiceService } from 'src/app/Activites/Services/activite-service.service';
import { ResponsableServiceService } from '../Services/responsable-service.service';

@Component({
  selector: 'app-detail-responsable',
  templateUrl: './detail-responsable.component.html',
  styleUrls: ['./detail-responsable.component.scss']
})
export class DetailResponsableComponent implements OnInit {

  idResp : any;
  respons : any;
  activiteRespons: any;
  constructor(
    private service : ResponsableServiceService,
    private serviceActivite: ActiviteServiceService,
    private route : ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.idResp = this.route.snapshot.params['id'];
    this.service.detailResponsable(this.idResp).subscribe((data : any)=>{
    this.respons = data;
    console.log("===========", this.respons);
    // this.serviceActivite.ResponsableParActivite(this.respons.id_responsable).subscribe((datas: any)=>{
    //   this.activiteRespons = datas;
    //   console.log(this.activiteRespons);
    //})
    })

  
  }

}
