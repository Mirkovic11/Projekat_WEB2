import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Crew } from 'src/app/entities/crew/crew';
import { Incident } from 'src/app/entities/incident/incident';
import { Street } from 'src/app/entities/street/street';
import { WorkPlans } from 'src/app/entities/workplan/workplan';
import { PlanService } from 'src/app/services/plan/plan.service';
import { StreetService } from 'src/app/services/street/street.service';
import { TeamService } from 'src/app/services/team/team.service';

@Component({
  selector: 'app-workplan-basicinfo',
  templateUrl: './workplan-basicinfo.component.html',
  styleUrls: ['./workplan-basicinfo.component.css']
})
export class WorkplanBasicinfoComponent implements OnInit {

  Ime!:string
  registerForm!: FormGroup;
  date!:Date
  public crews:Crew[] = [];
  //public selectedCrew:number;
  
  streets!:Street[];
  selectedStreet!:string;
  public inc!:Incident
  public plan!:WorkPlans
  
    constructor(private streetService:StreetService, private teamService:TeamService, private planService: PlanService) { 

      //this.selectedCrew = planService.currentCrew;    //ovo provjeriti    
      this.plan = planService.currentPlan;

      teamService.getCrews().subscribe(
      (res:any)=>{
        console.log(res.list);
        this.crews = res.list;
      },
      err=>{
        console.log(err);
      }
      )

      streetService.getStreets().subscribe(
        (res:any)=>{
          this.streets = res.lista;
        },
        err=>{
          console.log(err);
        }
      )
    }
  
    ngOnInit(): void {
      this.date = new Date();
      this.Ime = localStorage.getItem("FullName") as string;
    }
  
    ngOnDestroy(){
     // this.planService.currentCrew = this.selectedCrew;  //OVO provjeriti   
      this.planService.currentPlan = this.plan;
    }
  

}
