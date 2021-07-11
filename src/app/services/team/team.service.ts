import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TeamService {

 
  private baseUrl = "https://localhost:44364/api/Crews/";

  constructor(private http:HttpClient) { }

  getCrews() {
    return this.http.get(this.baseUrl);
  }
}
