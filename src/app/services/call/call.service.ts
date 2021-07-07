import { Injectable } from '@angular/core';
import { Call } from 'src/app/entities/call/call';
import { Device } from 'src/app/entities/device/device';

@Injectable({
  providedIn: 'root'
})
export class CallService {

  constructor() { }

  addCall(body:Call){
    
  }

  getCallsForIncidentId(id:number){}

  getCallsForDevices(body:Device[]){}
}
