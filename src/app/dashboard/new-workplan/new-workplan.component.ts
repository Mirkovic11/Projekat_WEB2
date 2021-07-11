import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PlanService } from 'src/app/services/plan/plan.service';

@Component({
  selector: 'app-new-workplan',
  templateUrl: './new-workplan.component.html',
  styleUrls: ['./new-workplan.component.css']
})
export class NewWorkplanComponent implements OnInit {

  constructor(private service:PlanService,private router:Router,/*private toastr: ToastrService*/) { }

  ngOnInit(): void {
  }
  onSubmit(){
    this.service.addPlan().subscribe(
      (res:any)=>{
        this.router.navigateByUrl("/dashboard/work-plans");
       // this.toastr.success('You successfully added new work plan!');
        
      },
      err=>{
        console.log(err);
        //this.toastr.error('Invalid');
      }
    )
  }

}
