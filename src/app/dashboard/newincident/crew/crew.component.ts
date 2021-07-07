import { Component, OnInit } from '@angular/core';
import { Crew } from 'src/app/entities/crew/crew';
import { Incident } from 'src/app/entities/incident/incident';
import { IncidentService } from 'src/app/services/incident/incident.service';

@Component({
  selector: 'app-crew',
  templateUrl: './crew.component.html',
  styleUrls: ['./crew.component.css']
})
export class CrewComponent implements OnInit {
  nubmerOfTeam: string[] = ['Team1', 'Team2', 'Team3', 'Team4', 'Team5'];
  public ekipa:Crew[];
  public incident: Incident;
  public izabranaEkipa: number;

  constructor(private incidentService:IncidentService) {
    this.incident=incidentService.trenutniIncident;
    this.izabranaEkipa=incidentService.trenutniTim;
    this.ekipa=[new Crew(1,"ekipa1",["lista"]), new Crew(2,"ekipa2",["lista"]) ];
   }

  ngOnInit(): void {
  }

  ngOnDestroy(){
    this.incidentService.trenutniTim = this.izabranaEkipa;
  }

}
