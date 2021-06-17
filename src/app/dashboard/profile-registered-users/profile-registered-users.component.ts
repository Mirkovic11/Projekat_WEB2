import { Component, OnInit } from '@angular/core';
import { StatusType } from 'src/app/entities/user/status-type.enum';
import { User } from 'src/app/entities/user/user';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-profile-registered-users',
  templateUrl: './profile-registered-users.component.html',
  styleUrls: ['./profile-registered-users.component.css'],
  providers: [UserService]
})
export class ProfileRegisteredUsersComponent implements OnInit {

  listaRegistrovanih: Array<User>;

  constructor(private userService: UserService) { 
    this.listaRegistrovanih=userService.loadUsers();
      
    let korisnici=new Array<User>();
    for(let i=0; i<this.listaRegistrovanih.length; i++){
      if(this.listaRegistrovanih[i].status==StatusType.Processing){
        korisnici.push(this.listaRegistrovanih[i]);
      }
    }


    this.listaRegistrovanih=korisnici;
  }

  ngOnInit(): void {
  }

}
