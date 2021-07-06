import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Device } from 'src/app/entities/device/device';
import { ToastrService } from 'ngx-toastr';
import { IncidentService } from 'src/app/services/incident/incident.service';

@Component({
  selector: 'app-device-modal',
  templateUrl: './device-modal.component.html',
  styleUrls: ['./device-modal.component.css']
})
export class DeviceModalComponent implements OnInit {

  displayedColumns: string[] = ['name', 'type', 'street'];
  dataSource: MatTableDataSource<Device>;


  

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  constructor(public dialogRef: MatDialogRef<DeviceModalComponent>,
    private toastr: ToastrService, public dialog: MatDialog,private incidentService:IncidentService,
    /*@Inject(MAT_DIALOG_DATA) public data: AddDevice, private deviceService:DeviceService*/) { 
    this.dataSource = new MatTableDataSource();
  }

  ngOnInit(): void {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngAfterViewInit() {

    this.dataSource=new MatTableDataSource([new Device("t1", "ime1","status1"), new Device("t2","ime2","status2")]);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
 
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }


  ok():void {
    
  }
}
