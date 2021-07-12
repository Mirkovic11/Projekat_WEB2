import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SafeDocService } from 'src/app/services/safeDoc/safe-doc.service';

@Component({
  selector: 'app-change-state',
  templateUrl: './change-state.component.html',
  styleUrls: ['./change-state.component.css']
})
export class ChangeStateComponent implements OnInit {

  selectedElement:string;
  selectedSafeDoc:number;
  safeDocs:number[] = [];
  selectedSafeDocState:string;
  constructor(private docService:SafeDocService,private router : Router) { 
    this.selectedElement="";
    this.selectedSafeDoc=-1;
    this.selectedSafeDocState="";

  }

  ngOnInit(): void {

    this.docService.getSDIds().subscribe((res:any)=>
    {
      this.safeDocs=res.lista;
      console.log(res.lista);
    },
    err=>{
      console.log(err);
    }
  )
  }


  submit() {
    if(this.selectedElement=="SafetyDoc" && this.selectedSafeDoc!=null){
      
      this.docService.changeState(this.selectedSafeDoc, this.selectedSafeDocState).subscribe
      ((res:any)=>{
        this.router.navigateByUrl('/dashboard/mysafetydocs');
        alert("Successfully scanged state!");
      },
      err=>
      {
        console.log(err);
        alert("Invalid");
      });
    }
  }
}
