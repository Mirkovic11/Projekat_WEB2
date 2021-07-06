import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { SafeDocs } from 'src/app/entities/safeDocuments/safe-docs';
import { SafeDocService } from 'src/app/services/safeDoc/safe-doc.service';


@Component({
  selector: 'app-basicinfodoc',
  templateUrl: './basicinfodoc.component.html',
  styleUrls: ['./basicinfodoc.component.css']
})
export class BasicinfodocComponent implements OnInit {

  public safeDoc:SafeDocs;
  public plans:number[] = [];
  date:Date;

  constructor(private safeDocservice : SafeDocService, private router : Router, private route : ActivatedRoute) {
    /*this.plans=new Array<number>();
    this.plans.push(1);
    this.plans.push(2);
    this.plans.push(3);*/
    this.safeDoc=safeDocservice.trenutni;/*new SafeDocs("",-1,"", "","",new Date(0,0,0),false,false,false,false)*/;
    this.plans=[1,23,30];
    this.date=new Date();

    
   }

  ngOnInit(): void {
    console.log(this.safeDoc);
  }

  ngOnDestroy(){
      console.log(this.safeDoc.workPlanId);
      this.safeDocservice.trenutni=this.safeDoc;
    console.log(this.safeDocservice.trenutni);
  }

}
