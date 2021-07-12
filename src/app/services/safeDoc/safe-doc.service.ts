import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { connectableObservableDescriptor } from 'rxjs/internal/observable/ConnectableObservable';
import { Device } from 'src/app/entities/device/device';
import { SafeDocs } from 'src/app/entities/safeDocuments/safe-docs';

@Injectable({
  providedIn: 'root'
})
export class SafeDocService {

  trenutni:SafeDocs;
  trenutniUredjaji: Device[]=[];

  private baseUrl="https://localhost:44364/api/SafetyDocs/";

  constructor(private http:HttpClient) {

    this.trenutni=new SafeDocs("",-1,"", "","",new Date(0,0,0),false,false,false,false);
   this.trenutni.status="Drafted";
   }

   getAllSD() {
     return this.http.get(this.baseUrl);
   }

   addNewSafetyDoc() {
     var safetyDoc:SafeDocs=this.trenutni;
     this.trenutni.dateCreated=new Date();
     var devices:Device[]=this.trenutniUredjaji;
     
     console.log("-----------------");
     console.log(devices)
     console.log("-----------------");

      var id=localStorage.getItem("Id");
      var role= localStorage.getItem("Role")
     var body = {safetyDoc, devices, id, role};

     console.log(body);

     this.trenutni=new SafeDocs("",-1,"", "","",new Date(0,0,0),false,false,false,false);
     this.trenutniUredjaji=[];
     
     console.log('id ordera je : ' + safetyDoc.workPlanId)
     return this.http.post(this.baseUrl, body);
   }

   getSDIds() {
     return this.http.get(this.baseUrl + "GetSafetyDocIds");
   }

   
  changeState(id:number,status:string){
    var body = {id,status}
    return this.http.patch(this.baseUrl + 'ChangeState',body )
  }
}
