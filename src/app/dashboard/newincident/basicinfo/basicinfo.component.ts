import { Component, OnInit } from '@angular/core';
import { Incident } from 'src/app/entities/incident/incident';
import { FormControl, FormGroup, Validators} from '@angular/forms';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { IncidentService } from 'src/app/services/incident/incident.service';

@Component({
  selector: 'app-basicinfo',
  templateUrl: './basicinfo.component.html',
  styleUrls: ['./basicinfo.component.css']
})
export class BasicinfoComponent implements OnInit {

  public inc:Incident;

  constructor(private incService: IncidentService) { 
    this.inc=incService.trenutniIncident;
  }

  ngOnInit(): void {
  }

  ngOnDestroy():void{
    this.incService.trenutniIncident = this.inc;
    console.log(this.incService);
  }

}
