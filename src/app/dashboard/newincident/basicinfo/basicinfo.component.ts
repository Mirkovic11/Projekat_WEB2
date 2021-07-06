import { Component, OnInit } from '@angular/core';
import { Incident } from 'src/app/entities/incident/incident';
import { FormControl, FormGroup, Validators} from '@angular/forms';
import {MatDatepickerModule} from '@angular/material/datepicker';

@Component({
  selector: 'app-basicinfo',
  templateUrl: './basicinfo.component.html',
  styleUrls: ['./basicinfo.component.css']
})
export class BasicinfoComponent implements OnInit {

  public inc!:Incident;

  constructor() { 
  }

  ngOnInit(): void {
  }

}
