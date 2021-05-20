import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { StatusType } from '../entities/user/status-type.enum';
import { User } from '../entities/user/user';
import { UserType } from '../entities/user/user-type.enum';
import { UserService } from '../services/user/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [UserService]
})
export class HomeComponent implements OnInit {

  @ViewChild('f') forma!: NgForm;
  exist: boolean;
  allUsers : Array<User>;
  incorrectly: boolean;
  user : User;

  constructor(private userService : UserService, private router : Router, private route : ActivatedRoute) {
    this.exist=false;
    this.allUsers=new Array<User>();
    this.incorrectly=false;
    this.user=new User(-1,"","","","",UserType.Consumer,"","","","",StatusType.Processing);
   }

  ngOnInit(): void {
  }


  logIn(temp : NgForm) : void {
    this.allUsers=this.userService.loadUsers();
    console.log(this.allUsers);

    this.incorrectly=false;
    console.log(this.incorrectly);
  

    for(let i=0; i<this.allUsers.length; i++ ){
      console.log(this.allUsers[i].email);
      if(this.allUsers[i].email==temp.value.adresa && this.allUsers[i].password==temp.value.sifra && this.allUsers[i].status!=StatusType.Denied){
        this.exist=true;
        this.user=this.allUsers[i];
        console.log("nasao sam ga "+ this.allUsers[i].email + this.allUsers[i].password);
        break;
      }
   
    }

    if(this.exist && this.user.status==StatusType.Accepted){
      this.router.navigate(['/','dashboard']);
    }
    else if(this.exist && this.user.status==StatusType.Processing){
      this.router.navigate(['/dashboard/profil'], {relativeTo: this.route});
      //this.router.navigate([ '../list/view', country.countryId ], { relativeTo: this.route });
    }
    else {
      this.incorrectly=true; //za ispis labele 'neipstavan email...'
      this.router.navigate(['/','home']);
      console.log("nema nista" + this.incorrectly);

    }
  }

}
