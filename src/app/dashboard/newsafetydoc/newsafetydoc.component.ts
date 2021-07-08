import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SafeDocs } from 'src/app/entities/safeDocuments/safe-docs';
import { SafeDocService } from 'src/app/services/safeDoc/safe-doc.service';
import { ToastrService } from 'ngx-toastr';
import { analyzeAndValidateNgModules } from '@angular/compiler';

@Component({
  selector: 'app-newsafetydoc',
  templateUrl: './newsafetydoc.component.html',
  styleUrls: ['./newsafetydoc.component.css']
})
export class NewsafetydocComponent implements OnInit {



  constructor(private docService:SafeDocService, private router:Router,
     private toastr:ToastrService) { }

  ngOnInit(): void {
  } 

  onSubmit(){
    this.docService.addNewSafetyDoc().subscribe(
      (res:any)=>{
        this.router.navigateByUrl("/dashboard/mysafetydocs");
        //this.toastr.success('You successfully added new safety document!');
        alert('You successfully added new safety document!');
        this.docService.trenutni=new SafeDocs("",-1,"", "","",new Date(0,0,0),false,false,false,false);//ovo ne radi, sacuva stari dokument kad se ponovo vratim
       this.docService.trenutniUredjaji=[];
      },
      err=>{
        console.log(err);
        this.toastr.error('Invalid');
      }
    )

    
  }
}
