import {AfterViewInit, Component, ViewChild} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { Device } from 'src/app/entities/device/device';
import { SafeDocService } from 'src/app/services/safeDoc/safe-doc.service';
import { ToastrService } from 'ngx-toastr';
import { DeviceModalComponent } from '../../deviceModal/device-modal/device-modal.component';
import { DeviceService } from 'src/app/services/device/device.service';

@Component({
  selector: 'app-equipmentdoc',
  templateUrl: './equipmentdoc.component.html',
  styleUrls: ['./equipmentdoc.component.css']
})
export class EquipmentdocComponent implements AfterViewInit {

  displayedColumns: string[] = ['name', 'type', 'street'];
  dataSource: MatTableDataSource<Device>;

  selectedDeviceId:string;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;


  constructor(private safeDocService: SafeDocService,public dialog: MatDialog, private deviceService:DeviceService, private toastr: ToastrService) { 
    this.dataSource = new MatTableDataSource();
    this.selectedDeviceId="";
  }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.dataSource = new MatTableDataSource(this.safeDocService.trenutniUredjaji);
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
openDialog() :void {
  console.log("otvorio dialog");
  const dialogRef=this.dialog.open(DeviceModalComponent, 
    {width: '60%',
    data: {deviceId: this.selectedDeviceId, incidentId:-1} });

    dialogRef.afterClosed().subscribe(result => {
      console.log("The dialog was closed " + result);
      this.deviceService.getDeviceByName(result).subscribe(
      (res:any)=>{
        this.safeDocService.trenutniUredjaji.push(res.povratnaVr);
        this.dataSource=new MatTableDataSource(this.safeDocService.trenutniUredjaji);
        this.dataSource.paginator=this.paginator;
        this.dataSource.sort=this.sort;
        alert("Device successfully added!");
      },
      err=>{
        console.log(err);
      }
      )
    });
}

}
