import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Consumer } from 'src/app/entities/consumer/consumer';
import { ConsumerService } from 'src/app/services/consumer/consumer.service';

@Component({
  selector: 'app-consumer',
  templateUrl: './consumer.component.html',
  styleUrls: ['./consumer.component.css']
})
export class ConsumerComponent implements AfterViewInit {

  displayedColumns: string[] = ['name', 'surname', 'street', 'phone', 'type'];
  dataSource!: MatTableDataSource<Consumer>;
  showAdd!:boolean
  
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private service:ConsumerService) {
    if(localStorage.getItem("Role") === "Dispatcher"){
      console.log(localStorage.getItem("Role"))
      this.showAdd = true
      console.log(this.showAdd)

    }else{
      this.showAdd = false;
    }
    this.dataSource = new MatTableDataSource();
  }

  ngAfterViewInit(): void {
    this.service.getConsumers().subscribe(
      (res:any)=>{
        console.log(res.lista);
        this.dataSource = new MatTableDataSource(res.lista);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
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

}
