import { Injectable } from '@angular/core';
import { Call } from 'src/app/entities/call/call';
import { Device } from 'src/app/entities/device/device';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CallService {

  private baseUrl = "https://localhost:44364/api/Calls/";

  constructor(private http:HttpClient) { }

  addNewCall(body:Call){
    return this.http.post(this.baseUrl, body);
  }

  getCallsForIncidentId(id:number){
    return this.http.get(this.baseUrl + id);
  }

  getCallsForDevices(body:Device[]){
    return this.http.post(this.baseUrl + "GetCallsForDevices", body);
  }
}
