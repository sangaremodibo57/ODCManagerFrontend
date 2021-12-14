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
  searchText= '';

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
    this.service.deleteAdmin(data).subscribe((datas: any)=>{
      window.location.reload();
      this.router.navigateByUrl('/liste-admin', {skipLocationChange: true}).then(()=>
      this.router.navigate(['liste-admin'])); 
    });
   
  }
}
