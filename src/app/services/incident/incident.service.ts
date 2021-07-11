import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Incident } from 'src/app/entities/incident/incident';
import { Device } from 'src/app/entities/device/device';

@Injectable({
  providedIn: 'root'
})


export class IncidentService {
  private baseUrl = "https://localhost:44364/api/Incidents/";
  public trenutniIncident: Incident;
  public trenutniUredjaji: Device[]=[];
  public trenutniTim:number;

  constructor(private http: HttpClient) {
    this.trenutniIncident=new Incident("","",0,false,"",new Date(0,0,0),new Date(0,0,0),
     new Date(0,0,0), new Date(0,0,0), 0,0,10, new Date(0,0,0),"","","","","" );
   
   this.trenutniIncident.status="Dispatched";
   this.trenutniTim=-1;

    }

    getAllIncidents() {
      return this.http.get(this.baseUrl);
    }

    addNewincident(){
      var incident:Incident = this.trenutniIncident;
      var crew:number = this.trenutniTim;
      var devices:Device[] = this.trenutniUredjaji;
      var id=localStorage.getItem("Id");
      var role= localStorage.getItem("Role")
      var body = {incident, crew, devices, role, id};

      console.log(body)
      this.trenutniIncident = new Incident("","",0,false,"",new Date(0,0,0),new Date(0,0,0),
      new Date(0,0,0), new Date(0,0,0), 0,0,10, new Date(0,0,0),"","","","","" );
    
      this.trenutniUredjaji = [];
      this.trenutniTim = 0;
      
      return this.http.post(this.baseUrl, body);
    }
}
