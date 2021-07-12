import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Device } from 'src/app/entities/device/device';

@Injectable({
  providedIn: 'root'
})
export class StreetService {

 
  private baseUrl = "https://localhost:44364/api/Streets/";

  constructor(private http:HttpClient) { }

  getAllStreets() {
    return this.http.get(this.baseUrl);
  }

  setPriority(ulica:String, prioritet:number){

    var body={ulica,prioritet};
    return this.http.patch(this.baseUrl + "SetPriority",body);

  }

  getPriority(body:Device[]) {
    return this.http.post(this.baseUrl + "GetPriority", body);
  }

  getPriorityForCall(street:string){
    return this.http.get(this.baseUrl + "GetPriorityForCall/"+street);
  }
}
