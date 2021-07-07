import {AfterViewInit, Component, ViewChild} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { Device } from 'src/app/entities/device/device';
import { IncidentService } from 'src/app/services/incident/incident.service';
import { ToastrService } from 'ngx-toastr';
import { DeviceModalComponent } from '../../newsafetydoc/deviceModal/device-modal/device-modal.component';
import { DeviceService } from 'src/app/services/device/device.service';


@Component({
  selector: 'app-devices',
  templateUrl: './devices.component.html',
  styleUrls: ['./devices.component.css']
})
export class DevicesComponent implements AfterViewInit {

  displayedColumns: string[] = ['name', 'type', 'street'];
  dataSource: MatTableDataSource<Device>;

  selectedDeviceId:string;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(public dialog: MatDialog, private incidentService:IncidentService, private deviceService:DeviceService, private toastr: ToastrService) {
  
    this.dataSource=new MatTableDataSource();
    this.selectedDeviceId="";
  }
  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.dataSource = new MatTableDataSource(this.incidentService.trenutniUredjaji);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DeviceModalComponent, {
      width: '60%',
      data: { deviceId: this.selectedDeviceId, incidentId: -1}
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
