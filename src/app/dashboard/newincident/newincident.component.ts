import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IncidentService } from 'src/app/services/incident/incident.service';






@Component({
  selector: 'app-newincident',
  templateUrl: './newincident.component.html',
  styleUrls: ['./newincident.component.css']
})
export class NewincidentComponent implements OnInit {

  constructor(private incidentService:IncidentService, private router:Router) { }
  

  ngOnInit(): void {
  }

  onSubmit() 
  {
  this.incidentService.addNewincident().subscribe(
    (res:any)=>{
      this.router.navigateByUrl("/dashboard/incidents");
      alert('You successfully added new incident!');
      
    },
    err=>{
      console.log(err);
      alert('Invalid');
    }
  )
}
}

