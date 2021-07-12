import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { StatusType } from 'src/app/entities/user/status-type.enum';
import { User } from 'src/app/entities/user/user';
import { UserType } from 'src/app/entities/user/user-type.enum';
import { UserService } from 'src/app/services/user/user.service';
import {ModalDismissReasons, NgbModal} from '@ng-bootstrap/ng-bootstrap';
import { ConsolidatedItemHitTestBehavior_$type } from 'igniteui-angular-charts';
import { MatDialog } from '@angular/material/dialog';
import { CallModalComponent } from './modal/call-modal/call-modal.component';
import { RegisteredUser } from 'src/app/entities/registeredUser/registered-user';
import { StreetService } from 'src/app/services/street/street.service';
import { CallService } from 'src/app/services/call/call.service';
import { Call } from 'src/app/entities/call/call';
import { Router } from '@angular/router';

@Component({
  selector: 'app-call',
  templateUrl: './call.component.html',
  styleUrls: ['./call.component.css'],
  providers: [UserService]
})
export class CallComponent implements OnInit {
  @ViewChild('f') forma!: NgForm;

  listaKorisnika : Array<User>;
  korisnik : RegisteredUser;
  closeModal: string;

  pretraga : boolean;
  prioritet:number;

  constructor(private korisnikService : UserService,public dialog: MatDialog,private callService:CallService, private router:Router, private modalService: NgbModal, private streetService:StreetService) { 
    this.listaKorisnika=korisnikService.loadUsers();
    this.korisnik=new RegisteredUser("","","","",new Date(0,0,0),"","",-1);
    this.closeModal="";
   // this.korisnik=this.listaKorisnika[0];
   this.pretraga=false;
   this.prioritet=0;
  }

  //ucitajKorisnik() : User {
  //  let k = this.listaKorisnika[0];
    //return this.korisnik=k;
  //}
  ngOnInit(): void {
  }

  submit(temp:NgForm) : void {
    console.log("usao sam");
    console.log("radiiiiiiiiiii");
   var call:Call=new Call(-1,"","","","","");

   call.comment=temp.value.comment;
   call.reason=temp.value.reason;
   call.hazard=temp.value.hazard;
   call.street=this.korisnik.street;
  var id=localStorage.getItem("Id");
 
  var body={call,id};
  console.log(body);
  

  this.callService.addNewCall(body).subscribe((res:any)=>
  {
    this.router.navigateByUrl("/dashboard");
    alert("Successfully added new call!");
  },
  err=> {
    alert("Invalid");
    console.log(err);
  });
  }


  onSubmit(temp: NgForm) : void{
   

   }
  
  
   openDialog() :void {
    console.log("otvorio dialog");
    const dialogRef=this.dialog.open(CallModalComponent, 
      {width: '60%',
      });

    dialogRef.afterClosed().subscribe(result => {
      console.log("The dialog was closed " + result);
      this.korisnikService.getUserByName(result).subscribe((res:any)=>
      {
        console.log(res);
        this.korisnik=res;
        console.log("ono sto saljem: "+this.korisnik.street)
        this.streetService.getPriorityForCall(this.korisnik.street).subscribe((res:any)=>{
          console.log("prioritet "+res.prioritet);
          this.prioritet=res.prioritet;
        },
        err=>{
          console.log(err);
        })
      },
      err=>{
        console.log(err);
      }
      );


     
    });
  }

     
   triggerModal(content : any) {//ako sam shvatila da se otvori modal
     this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((res) => {
       this.closeModal = `Closed with: ${res}`;
     }, (res) => {
       this.closeModal = `Dismissed ${this.getDismissReason(res)}`;
     });

     console.log("otvorio se");
   }
   
   private getDismissReason(reason: any): string {//pozove se kad se otvori modal
     if (reason === ModalDismissReasons.ESC) {
       console.log("esc");
       return 'by pressing ESC';
       
     } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
       console.log("neki clicking");
       return 'by clicking on a backdrop';
     } else {
       console.log("else");
       return  `with: ${reason}`;
     }

     
   }

   selektovani(k : User) {
    console.log(k);
   // this.korisnik=k;
  }

  filtiraj() {
    this.pretraga=true;
    console.log(this.pretraga);

  }

  ponisti() {
    this.pretraga=false;
    console.log(this.pretraga);

  }


}
