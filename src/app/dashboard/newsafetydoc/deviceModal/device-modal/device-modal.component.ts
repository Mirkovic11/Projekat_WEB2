import { AfterViewInit, Component, Inject, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Device } from 'src/app/entities/device/device';
import { IncidentService } from 'src/app/services/incident/incident.service';
import { AddDevice } from 'src/app/entities/addDevice/add-device';
import { DeviceService } from 'src/app/services/device/device.service';
import { connectableObservableDescriptor } from 'rxjs/internal/observable/ConnectableObservable';

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

  selectedDeviceId:string;
 
  constructor(public dialogRef: MatDialogRef<DeviceModalComponent>
    , @Inject(MAT_DIALOG_DATA) public data: AddDevice, public dialog: MatDialog, 
    private deviceService:DeviceService, private incidentService:IncidentService) {
      this.dataSource = new MatTableDataSource();
      this.selectedDeviceId="";
    }

  ngOnInit(): void {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngAfterViewInit() {
    console.log("Usao u dijalog");
    this.deviceService.getDevices().subscribe(
      (res:any)=>{
        console.log(res);
          
        var temp:Device[] = res;
          console.log(temp);
          
          var povratnaVr:Device[] = [];
          console.log(povratnaVr);
          
          var toRemove:Device[] = this.incidentService.trenutniUredjaji;
          console.log("to remove " +toRemove);
          
         
          temp.forEach(function (value) {
            console.log("usao u foreach" + value);
              var oke = true;
              toRemove.forEach(function(value1){
                console.log(value1);
              if(value1.name === value.name){
                oke = false;
                console.log("fasle");
              }
            })
            if(oke === true){
              povratnaVr.push(value);
              console.log("true, push " +value 
                );
            }
        });
        this.dataSource = new MatTableDataSource(povratnaVr);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      },
      err=>{
        console.log(err);
      }
    )
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
