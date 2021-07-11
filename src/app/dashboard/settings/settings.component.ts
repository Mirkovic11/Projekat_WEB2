import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Street } from 'src/app/entities/street/street';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {

  selectedStreet!:string
  selectedPriority!:number
  streets:Street[]=[]

  constructor(/*private service: StreetService,*/ private router: Router, /*private toastr:ToastrService*/) { }
  ngOnInit(): void {/*
    this.service.getStreets().subscribe(
      (res:any)=>{
        this.streets = res.lista;
        console.log(res.lista);
      },
      err=>{
        console.log(err);
      }
    )*/

  }

  onSubmit(){
    /*this.service.setPriority(this.selectedStreet, this.selectedPriority).subscribe(
  
    (res:any) => {
      this.router.navigateByUrl('/dashboard');
      this.toastr.success('You succesfully changed street priority!');
      },
    err=>{
      console.log(err);
      this.toastr.error('Invalid');
    }
    )
  }*/
  }

}
