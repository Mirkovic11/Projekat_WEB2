import { AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import { SafeDocs } from 'src/app/entities/safeDocuments/safe-docs';
import { SafeDocService } from 'src/app/services/safeDoc/safe-doc.service';



@Component({
  selector: 'app-mysafetydocs',
  templateUrl: './mysafetydocs.component.html',
  styleUrls: ['./mysafetydocs.component.css']
})
export class MysafetydocsComponent implements AfterViewInit 
{

  displayedColumns: string[] = ['type','dateCreated', 'status', 'details'];
  dataSource: MatTableDataSource<SafeDocs>;
  
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  prikaziDugme:boolean;

  constructor(private docService:SafeDocService){
    this.dataSource=new MatTableDataSource();
    
    console.log(localStorage.getItem("Role"));
    if(localStorage.getItem("Role")==="Dispatcher"){
      this.prikaziDugme=false;
    }else {
      this.prikaziDugme=true;
    }
  }


  ngAfterViewInit() {
    this.docService.getAllSD().subscribe((res:any)=> {
      console.log(res.listaDokumenata);
      this.dataSource=new MatTableDataSource(res.listaDokumenata);
      this.dataSource.sort=this.sort;
      this.dataSource.paginator = this.paginator;
    });
   

  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();


    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

}
