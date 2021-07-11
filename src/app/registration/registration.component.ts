import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Crew } from '../entities/crew/crew';
import { RegisteredUser } from '../entities/registeredUser/registered-user';
import { StatusType } from '../entities/user/status-type.enum';
import { User } from '../entities/user/user';
import { UserType } from '../entities/user/user-type.enum';
import { TeamService } from '../services/team/team.service';
import { UserService } from '../services/user/user.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'],
  providers : [UserService]
})
export class RegistrationComponent implements OnInit {

 
  sviKorisnici : Array<User>;
   
  list = new Array<string>(); // polja forme
  username : FormControl;
  email : FormControl;
  password1 : FormControl;
  password2 : FormControl;
  firstname : FormControl;
  lastname : FormControl;
  birth : FormControl;
  address : FormControl;
  tip : FormControl;

  listaTipova : Array<UserType>;
  ispravno : boolean;
  netacnaSifra : boolean;
  korImeDuplikat: boolean;

  noviKorisnik: User;


  kIme : string;
  duzina: boolean;

  selectedRole:string;
  crews:Crew[]=[];
  selectedCrew:Crew;
  url:any;

  constructor(private userService : UserService, private router : Router, private teamService: TeamService) { 

    this.sviKorisnici=userService.loadUsers();
    this.listaTipova= this.inicijalizacijOpcija();
    this.ispravno=false;
    this.netacnaSifra=false;
    this.korImeDuplikat=false;
    this.duzina=false;

    this.noviKorisnik=new User(-1,"","","","",UserType.Consumer,"","","","",StatusType.Processing);

    this.kIme="";

    this.password1=new FormControl();
    this.username=new FormControl();
    this.password2=new FormControl();
    this.email=new FormControl();
    this.firstname=new FormControl();
    this.lastname=new FormControl();
    this.address=new FormControl();
    this.birth=new FormControl();
    this.tip=new FormControl();

    this.selectedRole="";
    this.selectedCrew=new Crew(-1,"",[""]);
  }

  ngOnInit(): void {
    
    this.teamService.getCrews().subscribe(
    (res:any)=>{
      this.crews=res.lista;
      console.log("crewwwwwwwwwwww" +res.lista);
    },
    err=>{
      console.log(err + "crewww");
    }
    )

  }

  private inicijalizacijOpcija() : Array<UserType>{
    let lista=new Array<UserType>();

    lista.push(UserType.Administrator);
    lista.push(UserType.Consumer);
    lista.push(UserType.Dispatcher);
    lista.push(UserType.Worker);
    lista.push(UserType.TeamMember);

    return lista;
  }

  register() {
    this.korImeDuplikat=false;
    this.netacnaSifra=false;
    this.ispravno=false;
    this.duzina=false;
  /*  console.log("ispissssssssssss "+this.ispravno);
    console.log(this.firstname.value);
    console.log(this.username.value);
    console.log(this.email.value);
    console.log(this.lastname.value);
    console.log(this.password1.value);
    console.log(this.password2.value);
    console.log(this.tip.value);
    console.log(this.address.value);
    console.log(this.birth.value);
*/
  if(this.firstname.value==null || this.lastname.value==null || this.password1.value==null || this.password2.value==null || this.email.value==null  ||
    this.address.value==null || this.birth.value==null || this.tip.value==null || this.username.value==null){
      console.log("nije do kraja popunjena forma");
      this.ispravno=false;
     
      return;
    }
    else {
      this.ispravno=true;

      console.log(this.password1.value.length );
      if(this.password1.value.length < 8){
        this.ispravno=false;
        this.duzina=true;
       // return;
      }
      if(this.password1.value!=this.password2.value){
        this.ispravno=false;
        this.netacnaSifra=true;
        console.log("ne poklapa se sifra");
       // return;
      }
     /* for(let k of this.sviKorisnici){ //provjera da li vec neko postoji sa tim korisnickim imenom
        if(k.userName.toUpperCase() == this.username.value.toUpperCase()){
          this.ispravno=false;
          this.korImeDuplikat=true;
          this.kIme=this.username.value;
          console.log("----------------------------------------");
          console.log(k.userName, k.firstName,k.lastName);
          console.log("------"+this.username.value);
          console.log("----------------------------------------");
          break;
        }
      }*/
    }

    if(this.ispravno){

      console.log(this.firstname.value);
      console.log(this.lastname.value);
      console.log(this.email.value);
      console.log(this.tip.value);
      console.log(this.birth.value);
      console.log(this.firstname.value);

   /*   this.noviKorisnik=this.userService.newUser(this.userService.generateId(),this.username.value, this.password2.value,
      this.firstname.value, this.lastname.value, this.tip.value, this.email.value, this.birth.value, this.address.value, "", StatusType.Processing);
      console.log(this.noviKorisnik);
      /*    console.log(this.noviKorisnik.ime);
          console.log(this.noviKorisnik.prezime);
          console.log(this.noviKorisnik.korisnickoIme);
          console.log(this.noviKorisnik.sifra);
          console.log(this.noviKorisnik.email);
          console.log(this.noviKorisnik.adresa);
          console.log(this.noviKorisnik.id);
          console.log(this.noviKorisnik.slika);
          console.log(this.noviKorisnik.datumRodjenja);
          console.log(this.noviKorisnik.tip);*/

      var body:RegisteredUser = new RegisteredUser(this.username.value,this.email.value, this.password1.value,
        this.firstname.value, this.birth.value, this.address.value, this.tip.value, -1);
      
        console.log("------------------------------------");
        console.log(body);
        console.log("------------------------------------");
        if(this.selectedRole=="Crew Member"){
          body.crewID=this.selectedCrew.id;
        }

        console.log("pozivammmm");
        this.userService.registeration(body).subscribe(
        (res:any)=>{
          console.log("pozivammmm");
          this.router.navigate(['/','home']);
          alert("Successfully registrated!")
        },
        err=>{
          alert(err.value);
        }
        );
      
      
    }

   
  }



}
