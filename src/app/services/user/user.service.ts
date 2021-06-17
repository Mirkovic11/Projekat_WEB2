import { Injectable } from '@angular/core';
import { StatusType } from 'src/app/entities/user/status-type.enum';
import { User } from 'src/app/entities/user/user';
import { UserType } from 'src/app/entities/user/user-type.enum';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  allUsers: Array<User>;

  constructor() {
    this.allUsers=new Array<User>();
   }


   loadUsers() : Array<User> {
     return this.mockedUsers();
   }

   mockedUsers() : Array<User> {
    let list=new Array<User>();

    const u1=new User(1,"zeljanam","123456789","Zeljana", "Mirkovic", UserType.Administrator, "z@gmail.com", '11-01-1998',"Puskinova 25", "http://ssl.gstatic.com/accounts/ui/avatar_2x.png",StatusType.Accepted);
    const u2=new User(2,"markom","123456789","Marko", "Markovic", UserType.Consumer, "mm@gmail.com", '11-01-1998',"Puskinova 25", "http://ssl.gstatic.com/accounts/ui/avatar_2x.png",StatusType.Processing);
    const u3=new User(3,"jankoo","123456789","Janko", "Jankovic", UserType.TeamMember, "jj@gmail.com", '11-01-1998',"Puskinova 25", "http://ssl.gstatic.com/accounts/ui/avatar_2x.png",StatusType.Denied);
    const u4=new User(4,"anaa","123456789","Ana", "Markovic", UserType.Worker, "ana@gmail.com", '11-01-1998',"Puskinova 25", "http://ssl.gstatic.com/accounts/ui/avatar_2x.png",StatusType.Processing);
    const u5=new User(4,"anaa","123456789","Jovan", "Jovanovic", UserType.Worker, "jovan@gmail.com", '11-01-1998',"Puskinova 25", "http://ssl.gstatic.com/accounts/ui/avatar_2x.png",StatusType.Processing);
    const u6=new User(4,"anaa","123456789","Mirko", "Mirkovic", UserType.TeamMember, "ana@gmail.com", '11-01-1998',"Puskinova 25", "http://ssl.gstatic.com/accounts/ui/avatar_2x.png",StatusType.Processing);
    const u7=new User(4,"anaa","123456789","Nikola", "Nikolic", UserType.Dispatcher, "nn@gmail.com", '11-01-1998',"Puskinova 25", "http://ssl.gstatic.com/accounts/ui/avatar_2x.png",StatusType.Processing);
    
    list.push(u1);
    list.push(u2);
    list.push(u3);
    list.push(u4);
    list.push(u5);
    list.push(u6);
    list.push(u7);
    return list;

   }


   generateId() : number {
     let broj = this.loadUsers().length;
     const id=broj+1;
     return  id;
   }

   newUser(id: number,korisnickoIme: string, sifra: string, ime: string, prez: string, tip: UserType, mail : string, datum: string, adresa: string, slika : string, status : StatusType) : User {
    let korisnik= new User(id,korisnickoIme,sifra,ime,prez,tip,mail,datum,adresa,slika,status);// korisnika treba posle upisati u bazu
    //this.listaKorisnika.push(korisnik);
    return korisnik;
  }
}
