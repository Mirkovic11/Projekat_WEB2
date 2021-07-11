import { AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import { Call } from 'src/app/entities/call/call';
import { IncidentService } from 'src/app/services/incident/incident.service';
import { CallService } from 'src/app/services/call/call.service';
import { Device } from 'src/app/entities/device/device';


@Component({
  selector: 'app-calls',
  templateUrl: './calls.component.html',
  styleUrls: ['./calls.component.css']
})
export class CallsComponent implements AfterViewInit {
  displayedColumns: string[] = ['reason', 'hazard', 'comment'];
  dataSource: MatTableDataSource<Call>;
  
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private callService: CallService, private incidentService:IncidentService){
    this.dataSource=new MatTableDataSource();
  }

  ngAfterViewInit() {
    var body:Device[]=this.incidentService.trenutniUredjaji;
    
    this.callService.getCallsForDevices(body).subscribe((res:any)=>{
      console.log(res.retval);
      this.dataSource=new MatTableDataSource(res.retval);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
    },
    err=>{
      console.log(err);
      alert(err);
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
