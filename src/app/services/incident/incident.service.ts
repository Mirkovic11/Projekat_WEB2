import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Incident } from 'src/app/entities/incident/incident';
import { Device } from 'src/app/entities/device/device';

@Injectable({
  providedIn: 'root'
})
export class IncidentService {

  public trenutniIncident: Incident;
  public trenutniUredjaji: Device[]=[];
  public trenutniTim:number;

  constructor(private http: HttpClient) {
    this.trenutniIncident=new Incident("","",0,false,"",new Date(0,0,0),new Date(0,0,0),
     new Date(0,0,0), new Date(0,0,0), 0,0,10, new Date(0,0,0),"","","","","" );
   
   this.trenutniIncident.status="Dispatched";
   this.trenutniTim=-1;

    }
}
