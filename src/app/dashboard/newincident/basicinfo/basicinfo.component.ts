import { Component, OnInit } from '@angular/core';
import { Incident } from 'src/app/entities/incident/incident';
import { FormControl, FormGroup, Validators} from '@angular/forms';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { IncidentService } from 'src/app/services/incident/incident.service';
import { Device } from 'src/app/entities/device/device';
import { CallService } from 'src/app/services/call/call.service';
import { StreetService } from 'src/app/services/street/street.service';

@Component({
  selector: 'app-basicinfo',
  templateUrl: './basicinfo.component.html',
  styleUrls: ['./basicinfo.component.css']
})
export class BasicinfoComponent implements OnInit {

  public incident:Incident;

  constructor(private incService: IncidentService, private callService:CallService, private streetService:StreetService) { 
    this.incident=incService.trenutniIncident;
  }

  ngOnInit(): void {
    this.incident=this.incService.trenutniIncident;

    var body:Device[]=this.incService.trenutniUredjaji;

    this.streetService.getPriority(body).subscribe((res:any)=>{
      this.incident.priority=res.prioritet;
    },
    err=>{
      console.log(err);
    })

    this.callService.getCallsForDevices(body).subscribe(
      (res:any)=>{
        this.incident.calls = (res.retval).length;
        this.incident.affectedCustomers=(res.retval).length;
      }
    )
  }

  ngOnDestroy():void{
    this.incService.trenutniIncident = this.incident;
    console.log(this.incService);
  }

}
