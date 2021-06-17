import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/entities/user/user';
import { UserType } from 'src/app/entities/user/user-type.enum';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
  providers: [UserService]
})
export class ProfileComponent implements OnInit {

  courseForm: FormGroup;

  korisnik : User;
  listaKorisnika : Array<User>;
  listaTipova : Array<UserType>;

  constructor(private korisnikService : UserService) {
    this.korisnik=korisnikService.loadUsers()[2];
    this.listaKorisnika=this.korisnikService.loadUsers();
    this.listaTipova=this.inicijalizacijOpcija();
    this.courseForm=this.initForm();
   }

  ngOnInit(): void {
   
  }

  private inicijalizacijOpcija() : Array<UserType>{
    let lista=new Array<UserType>();

    lista.push(this.korisnik.type);
    if(this.korisnik.type!=UserType.Consumer){
      lista.push(UserType.Consumer);
    }
    if(this.korisnik.type!=UserType.Administrator){
      lista.push(UserType.Administrator);
    }
    if(this.korisnik.type!=UserType.Dispatcher){
      lista.push(UserType.Dispatcher);
    }
    if(this.korisnik.type!=UserType.Worker){
      lista.push(UserType.Worker);
    }
    if(this.korisnik.type!=UserType.TeamMember){
      lista.push(UserType.TeamMember);
    }

    return lista;
  }

  private initForm() : FormGroup{ 
    let forma = new FormGroup({
      'firstName': new FormControl(this.korisnik.firstName, [Validators.required, Validators.minLength(2), Validators.maxLength(30)]),
      'lastName': new FormControl(this.korisnik.lastName, [Validators.required, Validators.maxLength(30),Validators.minLength(30)]),
      'email': new FormControl(this.korisnik.email, [Validators.email,Validators.required]),
      'address' : new FormControl(this.korisnik.address, Validators.required),
      'type': new FormControl(this.korisnik.type,Validators.required),
      'userName': new FormControl(this.korisnik.userName),
      'birth' : new FormControl(this.korisnik.dateOfBirth, Validators.required),
      'status' : new FormControl(this.korisnik.status)
    });

    return forma
  }

  sacuvaj() : void {
    console.log(this.courseForm.value);
    //console.log(this.courseForm.controls.firstName.value);
    //let korIme=this.courseForm.controls.firstName.value;
    let ime =(<HTMLInputElement> document.getElementById("firstName")).value;//preuzimanje vrijednosti preko inputa iz html-a
    console.log(ime);
    let prezime = (<HTMLInputElement> document.getElementById("lastName")).value;
    console.log(prezime);
    let adresa = (<HTMLInputElement> document.getElementById("address")).value;
    console.log(adresa);
    let email = (<HTMLInputElement> document.getElementById("email")).value;
    console.log(email);
    let type = (<HTMLInputElement> document.getElementById("type")).value;
    console.log(type);
    let birth = (<HTMLInputElement> document.getElementById("birth")).value;
    console.log(birth);

    if(email=="") {//koje jos polje ne smije biit prazno
      return;
    }
    let image = (<HTMLInputElement> document.getElementById("image")).value; //ne znam kako da dobijem url slike
    console.log(image);
    
    this.updateUser(ime,prezime,adresa,email,image,type,birth);
  
  }

  updateUser(ime:string, prez:string, adr:string, email:string, img:string, tip:string,datum:string) : void {
    let indeks=this.listaKorisnika.indexOf(this.listaKorisnika[2]); // ovdje napraviti posle da bude onaj korisnik koji je prijavljen, ne radi mi kad napisem 'this.korisnik'
    console.log(indeks);
    console.log("********\n"+this.listaKorisnika[indeks].firstName+"\n*************")
    this.listaKorisnika[indeks].firstName=ime;
    this.listaKorisnika[indeks].lastName=prez;
    this.listaKorisnika[indeks].address=adr;
    this.listaKorisnika[indeks].email=email;
    this.listaKorisnika[indeks].image=img;
    if(tip==UserType.Administrator){
      this.listaKorisnika[indeks].type=UserType.Administrator;
    }
    if(tip==UserType.Consumer){
      this.listaKorisnika[indeks].type=UserType.Consumer;
    } 
    if(tip==UserType.Dispatcher){
      this.listaKorisnika[indeks].type=UserType.Dispatcher;
    } 
    if(tip==UserType.TeamMember){
      this.listaKorisnika[indeks].type=UserType.TeamMember;
    }
    if(tip==UserType.Worker){
      this.listaKorisnika[indeks].type=UserType.Worker;
    }
    
    this.listaKorisnika[indeks].dateOfBirth=datum;
    alert("Successfully updated!");
  }
  

}
