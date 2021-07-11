import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngleRadiusPair } from 'igniteui-angular-charts';
import { Device } from 'src/app/entities/device/device';
import { Street } from 'src/app/entities/street/street';
import { DeviceService } from 'src/app/services/device/device.service';
import { StreetService } from 'src/app/services/street/street.service';

@Component({
  selector: 'app-add-new-device',
  templateUrl: './add-new-device.component.html',
  styleUrls: ['./add-new-device.component.css']
})
export class AddNewDeviceComponent implements OnInit {

  ime:string;
  ulice:Street[]=[];
  izabranaUlica:string;
  izabraniTip:string;

  constructor(private deviceService:DeviceService, private streetService:StreetService, private router: Router) { 
    this.ime="";
    this.izabranaUlica="";
    this.izabraniTip="";
    streetService.getAllStreets().subscribe((res:any)=>
    {
      this.ulice=res.lista;
    },
    err=>{
      console.log(err);
    }
  );
  }

  ngOnInit(): void {
  }

  onSubmit(){

    var body:Device=new Device("","","");
    body.name=this.ime;
    body.type=this.izabraniTip;
    body.street=this.izabranaUlica;
    this.deviceService.addNewDevice(body).subscribe((res:any)=>
    {
      this.refreshName();
      this.router.navigateByUrl("/dashboard/devices");
      alert("Successfully added new device");
    }, err=>
    {
      console.log(err);
      alert("Invalid");
    });
  }

  onCauseChange($event:any){
    this.refreshName();
  }

  refreshName(){

    this.deviceService.getNextId(this.izabraniTip).subscribe((res:any)=>
    {
      this.ime=res.newId;
      alert("Name refreshed!");
    },
    err=>{
      console.log(err);
    });
  }
}
