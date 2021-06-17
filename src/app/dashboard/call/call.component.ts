import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { StatusType } from 'src/app/entities/user/status-type.enum';
import { User } from 'src/app/entities/user/user';
import { UserType } from 'src/app/entities/user/user-type.enum';
import { UserService } from 'src/app/services/user/user.service';
import {ModalDismissReasons, NgbModal} from '@ng-bootstrap/ng-bootstrap';
import { ConsolidatedItemHitTestBehavior_$type } from 'igniteui-angular-charts';

@Component({
  selector: 'app-call',
  templateUrl: './call.component.html',
  styleUrls: ['./call.component.css'],
  providers: [UserService]
})
export class CallComponent implements OnInit {
  @ViewChild('f') forma!: NgForm;

  listaKorisnika : Array<User>;
  korisnik : User;
  closeModal: string;

  pretraga : boolean;


  constructor(private korisnikService : UserService,private modalService: NgbModal) { 
    this.listaKorisnika=korisnikService.loadUsers();
    this.korisnik=new User(-1,"","", "","",UserType.None,"", "","","",StatusType.None);
    this.closeModal="";
   // this.korisnik=this.listaKorisnika[0];
   this.pretraga=false;
  }

  ucitajKorisnik() : User {
    let k = this.listaKorisnika[0];
    return this.korisnik=k;
  }
  ngOnInit(): void {
  }
  onSubmit(temp: NgForm) : void{
   console.log("radiiiiiiiiiii");
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
    this.korisnik=k;
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


