import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Device } from 'src/app/entities/device/device';
import { DeviceService } from 'src/app/services/device/device.service';
import { PlanService } from 'src/app/services/plan/plan.service';
import { DeviceModalComponent } from '../newsafetydoc/deviceModal/device-modal/device-modal.component';

@Component({
  selector: 'app-workplan-equipment',
  templateUrl: './workplan-equipment.component.html',
  styleUrls: ['./workplan-equipment.component.css']
})
export class WorkplanEquipmentComponent implements AfterViewInit {
  displayedColumns: string[] = ['name', 'type', 'street'];
  dataSource: MatTableDataSource<Device>;

  selectedDeviceId!:string;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(public dialog: MatDialog, private planService:PlanService, private deviceService:DeviceService/*, private toastr: ToastrService*/) {
    this.dataSource = new MatTableDataSource();
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DeviceModalComponent, {
      width: '50%',
      data: { deviceId: this.selectedDeviceId, incidentId: -1}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed' + result);
      this.deviceService.getDeviceByName(result).subscribe(
        (res:any)=>{
          this.planService.currentDevices.push(res.retval);
          this.dataSource = new MatTableDataSource(this.planService.currentDevices);
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
          //this.toastr.success('You added a device');
        },
        err=>{
          console.log(err);
        }
      )
    });
  }
  

  ngAfterViewInit() {
      this.dataSource = new MatTableDataSource(this.planService.currentDevices);
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

}
