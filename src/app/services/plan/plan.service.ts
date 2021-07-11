import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Device } from 'src/app/entities/device/device';
import { WorkPlans } from 'src/app/entities/workplan/workplan';

@Injectable({
  providedIn: 'root'
})
export class PlanService {

  private baseUrl = "https://localhost:44364/api/Plans/"
  public currentPlan:WorkPlans;
  public currentCrew:number;
  public currentDevices:Device[] = [];

  constructor(private http: HttpClient) {
    this.currentPlan = new WorkPlans("","",-1,new Date(),new Date(),"","","",new Date());
    this.currentPlan.status = "Drafted";
    this.currentCrew = -1;
   }
  
  getPlans(){
    return this.http.get(this.baseUrl);
  }

  addPlan(){
    var plan:WorkPlans = this.currentPlan;
    var crew:number = this.currentCrew;
    var devices:Device[] = this.currentDevices;
    var body = {plan, crew, devices};
    console.log(body);

    this.currentPlan = new WorkPlans("","",-1,new Date(),new Date(),"","","",new Date());
    this.currentDevices = [];
    this.currentCrew = 0;
    
    console.log('id ordera je : ' + plan.workOrderId)
    return this.http.post(this.baseUrl, body);
  }

  getPlanIds(){
    return this.http.get(this.baseUrl + "GetPlanIds");
  }

  getPlanStatus(id:number){
    return this.http.get(this.baseUrl + 'GetPlanStatus/' + id);
  }

  changeState(id:number,status:string){
    var body = {id,status}
    return this.http.patch(this.baseUrl + 'ChangeState',body )
  }
}
