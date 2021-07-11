import { AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import { Incident } from 'src/app/entities/incident/incident';
import { IncidentService } from 'src/app/services/incident/incident.service';


export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}


@Component({
  selector: 'app-incidents',
  templateUrl: './incidents.component.html',
  styleUrls: ['./incidents.component.css']
})
export class IncidentsComponent implements AfterViewInit {
  displayedColumns: string[] = ['type', 'scheduledTime', 'voltage', 'cause'];
  dataSource: MatTableDataSource<Incident>;
  

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  showAdd:boolean = false; 

constructor(private incidentService:IncidentService){
  this.dataSource=new MatTableDataSource();
 
  if(localStorage.getItem("Role") === "Dispatcher"){ //samo dispecer moze da doda novi incident
    this.showAdd = true
  }else{
    this.showAdd = false;
  }

}

  ngAfterViewInit() {

    this.incidentService.getAllIncidents().subscribe((res:any)=>
    {
      this.dataSource=new MatTableDataSource(res.lista);
      this.dataSource.sort = this.sort; //sort nekim cudom ne radi, ne znam sto!!!
      this.dataSource.paginator = this.paginator;
    })
   
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }


  
}

