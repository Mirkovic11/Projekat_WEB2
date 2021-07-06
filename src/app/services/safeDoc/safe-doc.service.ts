import { Injectable } from '@angular/core';
import { Device } from 'src/app/entities/device/device';
import { SafeDocs } from 'src/app/entities/safeDocuments/safe-docs';

@Injectable({
  providedIn: 'root'
})
export class SafeDocService {

  trenutni:SafeDocs;
  trenutniUredjaji: Device[]=[];

  constructor() {
    this.trenutni=new SafeDocs("",-1,"", "","",new Date(0,0,0),false,false,false,false);
   this.trenutni.status="Drafted";
   }
}
