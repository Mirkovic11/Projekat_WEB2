import { Component, ComponentFactoryResolver, OnInit } from '@angular/core';
import { Crew } from 'src/app/entities/crew/crew';
import { Incident } from 'src/app/entities/incident/incident';
import { IncidentService } from 'src/app/services/incident/incident.service';
import { TeamService } from 'src/app/services/team/team.service';

@Component({
  selector: 'app-crew',
  templateUrl: './crew.component.html',
  styleUrls: ['./crew.component.css']
})
export class CrewComponent implements OnInit {
 
  public ekipa:Crew[]=[];
  public incident: Incident;
  public izabranaEkipa: number;

  constructor(private incidentService:IncidentService, private teamService:TeamService) {
    this.incident=incidentService.trenutniIncident;
    this.izabranaEkipa=incidentService.trenutniTim;
    teamService.getCrews().subscribe((res:any)=>{
      this.ekipa=res.lista;
    },
    err=>
    {
      alert(err);
      console.log(err);
    });
  
   }

  ngOnInit(): void {
  }

  ngOnDestroy(){
    this.incidentService.trenutniTim = this.izabranaEkipa;
  }

}
