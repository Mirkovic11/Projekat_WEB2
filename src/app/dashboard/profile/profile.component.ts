import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/entities/user/user';
import { UserType } from 'src/app/entities/user/user-type.enum';
import { UserService } from 'src/app/services/user/user.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { Crew } from 'src/app/entities/crew/crew';
import { TeamService } from 'src/app/services/team/team.service';
import { RegisteredUser } from 'src/app/entities/registeredUser/registered-user';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
  providers: [UserService]
})
export class ProfileComponent implements OnInit {

registerForm!: FormGroup;

selectedRole!:string;
crews: Crew[] = [];
selectedCrew!:Crew;

url:any;

constructor(private service:UserService, private router:Router,private toastr: ToastrService,private teamService:TeamService) { }

ngOnInit(): void {
  this.initForm();
  this.loadData();
}

private loadData(){
  var body:any;
  this.service.getProfile().subscribe(
    (res:any)=>{
      body = res;
      this.registerForm.patchValue({
        username:body.retval.username,
        email:body.retval.email,
        password:"",
        repeat:"",
        firstName:body.retval.fullName.split(' ')[0],
        lastName:body.retval.fullName.split(' ')[1],
        date:body.retval.dob.split('T')[0],
        address:body.retval.street,
      });
      this.selectedCrew = body.retval.crewID;
      this.selectedRole = body.retval.role;
    },
    (    err: any)=>{
      console.log(err);
    }
  );
  
  this.teamService.getCrews().subscribe(
    (res:any)=>{
      this.crews = res.list;
      console.log(res.list);
    },
    err=>{
      console.log(err);
    }
  )
}

private initForm() {
  this.registerForm = new FormGroup({
    'username': new FormControl(''),
    'password': new FormControl(''),
    'repeat': new FormControl(''),
    'email': new FormControl(''),
    'firstName': new FormControl(''),
    'lastName': new FormControl(''),
    'date': new FormControl(''),
    'address': new FormControl(''),
    'image': new FormControl(null)
  });
}

onSubmit() {
  var body:RegisteredUser = {
    username:this.registerForm.get('username')?.value,
    email:this.registerForm.get('email')?.value,
    password:this.registerForm.get('password')?.value,
    fullName:this.registerForm.get('firstName')?.value + " " + this.registerForm.get('lastName')?.value,
    DOB:this.registerForm.get('date')?.value,
    street:this.registerForm.get('address')?.value,
    role:this.selectedRole,
    crewID:-1 
  }
  if(this.selectedRole==="Crew Member"){
    body.crewID = (this.selectedCrew as unknown) as number;
    console.log("id promjenjen na:"+this.selectedCrew)
  }
  this.service.editProfile(body, this.registerForm.get('repeat')?.value).subscribe(
    (res:any)=>{
      localStorage.setItem("FullName",body.fullName);
      if(res.msg === "changedpass"){
        localStorage.clear();
        this.router.navigateByUrl("/");
        
      }else{
        if(res.msg==="ok"){
          this.loadData();
        }
        else{
          //greska pri promjeni passworda
        }
      }
      this.router.navigateByUrl("/dashboard")
      console.log("Nova uloga je " + this.selectedRole)
      localStorage.setItem("Role",this.selectedRole)
      this.toastr.success('You succesfully changed your profile!');
    },
    (    err: any)=>{
      console.log(err);
      this.toastr.error('Invalid');
    }
  )
  this.loadData();
}

onSelectFile(event:any) { // called each time file input changes
  if (event.target.files && event.target.files[0]) {
    var reader = new FileReader();

    reader.readAsDataURL(event.target.files[0]); // read file as data url
    console.log(event.target.files[0]);

    reader.onload = (event) => { // called once readAsDataURL is completed
      this.url = event.target?.result;
      console.log(this.registerForm.get('image')?.value);
    }
  }
}

}
