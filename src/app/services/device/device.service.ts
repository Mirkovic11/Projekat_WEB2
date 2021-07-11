import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ThemeService } from 'ng2-charts';
import { Device } from 'src/app/entities/device/device';

@Injectable({
  providedIn: 'root'
})
export class DeviceService {

  private baseUrl="https://localhost:44364/api/Devices/";

  constructor(private http:HttpClient) { }

  getDevices(){
    return this.http.get(this.baseUrl);
  }

  addNewDevice(body:Device) {
    return this.http.post(this.baseUrl, body);
  }
  
  getDeviceByName(name:string){
    return this.http.get(this.baseUrl+"GetDeviceByName/"+name);
  }

  getNextId(type:string){
    return this.http.get(this.baseUrl + type);
  }

  
}
