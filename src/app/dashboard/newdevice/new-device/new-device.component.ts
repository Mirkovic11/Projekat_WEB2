import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { Device } from 'src/app/entities/device/device';
import { DeviceService } from 'src/app/services/device/device.service';

@Component({
  selector: 'app-new-device',
  templateUrl: './new-device.component.html',
  styleUrls: ['./new-device.component.css']
})
export class NewDeviceComponent implements AfterViewInit {

  displayedColumns: string[] = ['name', 'type', 'street'];
  dataSource: MatTableDataSource<Device>;
  showAdd:boolean;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private deviceService:DeviceService) { 
    this.dataSource=new MatTableDataSource();

    if(localStorage.getItem("Role") === "Dispatcher"){    
      this.showAdd = true
    }else{
      this.showAdd = false;
    }
  }

  ngOnInit(): void {
  }

  
  ngAfterViewInit() {
    this.deviceService.getDevices().subscribe((res:any)=>
    {
    this.dataSource=new MatTableDataSource(res);
    this.dataSource.sort = this.sort;
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
