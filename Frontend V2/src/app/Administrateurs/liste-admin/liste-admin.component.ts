import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceAdminService } from '../Services/service-admin.service';

@Component({
  selector: 'app-liste-admin',
  templateUrl: './liste-admin.component.html',
  styleUrls: ['./liste-admin.component.scss']
})
export class ListeAdminComponent implements OnInit {
  listAdmin: any;

  constructor(
    private service : ServiceAdminService,
    private router : Router
  ) { }

  ngOnInit(): void {
    this.listeAdm();
  }

  async listeAdm(){
      return this.service.listeAdmin().subscribe((data: any)=>{
        this.listAdmin = data;
      })
  }

  deleteAdmin(data: any){
    //console.log(data);
    this.service.deleteAdmin(data).subscribe((datas: any)=>{
      this.router.navigate(['liste-admin']);
    });
   
  }
}
