import { Component, OnInit } from '@angular/core';
import { IncidentService } from 'src/app/services/incident/incident.service';

@Component({
  selector: 'app-resolution',
  templateUrl: './resolution.component.html',
  styleUrls: ['./resolution.component.css']
})
export class ResolutionComponent implements OnInit {

  public uzroci:string[]=["Human Error", "Weather","Equipment Failure"];;
  public poduzroci:string[]=[];
  public izabraniUzrok;
  public izabraniPoduzrok;
  public izabranaKonstrukcija;
  public izabraniMaterijal;

  constructor(private incidentService:IncidentService) {
    this.izabraniUzrok=incidentService.trenutniIncident.cause;
    this.izabraniPoduzrok=incidentService.trenutniIncident.subCause;
    console.log("***********\n"+incidentService.trenutniIncident.subCause+"*********");
   //nece da mi prikaze poduzrok kad se ponovo vratim na ovu karticu
    this.izabranaKonstrukcija=incidentService.trenutniIncident.constructionType;
    this.izabraniMaterijal=incidentService.trenutniIncident.material;

   }

  ngOnInit(): void {

  }

  onCauseChange($event:any){
    console.log(this.izabraniUzrok);
    if(this.izabraniUzrok=="Human Error"){
      this.poduzroci= ["Missuse","Overheat"];
    }
    if(this.izabraniUzrok=="Weather"){
      this.poduzroci = ["Lightning Strike", "Earthquake", "Floods"];
    }
    if(this.izabraniUzrok=="Equipment Failure"){
      this.poduzroci = ["Overcharged", "Breakdown"];
    }
  }

  ngOnDestroy() {
    this.incidentService.trenutniIncident.material=this.izabraniMaterijal;
    this.incidentService.trenutniIncident.cause=this.izabraniUzrok;
    this.incidentService.trenutniIncident.subCause=this.izabraniPoduzrok;
    this.incidentService.trenutniIncident.constructionType=this.izabranaKonstrukcija;
  }

}
