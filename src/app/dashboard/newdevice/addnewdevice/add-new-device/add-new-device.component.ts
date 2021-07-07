import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Street } from 'src/app/entities/street/street';
import { DeviceService } from 'src/app/services/device/device.service';

@Component({
  selector: 'app-add-new-device',
  templateUrl: './add-new-device.component.html',
  styleUrls: ['./add-new-device.component.css']
})
export class AddNewDeviceComponent implements OnInit {

  ime:string;
  ulice:Street[];
  izabranaUlica:string;
  izabraniTip:string;

  constructor(private deviceService:DeviceService, private router: Router) { 
    this.ime="";
    this.ulice=[];
    this.izabranaUlica="";
    this.izabraniTip="";
  }

  ngOnInit(): void {
  }

  onSubmit(){}

  onCauseChange($event:any){
    this.refreshName();
  }

  refreshName(){}
}
