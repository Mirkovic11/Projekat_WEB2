import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SafeDocs } from 'src/app/entities/safeDocuments/safe-docs';
import { SafeDocService } from 'src/app/services/safeDoc/safe-doc.service';

@Component({
  selector: 'app-checklist',
  templateUrl: './checklist.component.html',
  styleUrls: ['./checklist.component.css']
})
export class ChecklistComponent implements OnInit {
  safeDoc:SafeDocs;


  typeOfDevice: string[] = ['All work operations completed?', 'All tags removed?', 'Grounding removed?', 'Ready for service?'];
  
  constructor(private safeDocservice : SafeDocService, private router : Router, private route : ActivatedRoute) {
    this.safeDoc=safeDocservice.trenutni;/*new SafeDocs("",-1,"", "","",new Date(0,0,0),false,false,false,false);*/
   
 
  }

  ngOnInit(): void {
  }

  ngOnDestroy():void{
    this.safeDocservice.trenutni=this.safeDoc;
    console.log( this.safeDocservice.trenutni);
  }
}
