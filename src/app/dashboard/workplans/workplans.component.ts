import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { WorkPlans } from 'src/app/entities/workplan/workplan';
import { PlanService } from 'src/app/services/plan/plan.service';

@Component({
  selector: 'app-workplans',
  templateUrl: './workplans.component.html',
  styleUrls: ['./workplans.component.css']
})
export class WorkplansComponent implements AfterViewInit {
  displayedColumns: string[] = ['type', 'startdate', 'status', 'company'];
  dataSource!: MatTableDataSource<WorkPlans>;
  showAdd!:boolean
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private service:PlanService) {
    if(localStorage.getItem("Role") === "Dispatcher"){
      console.log(localStorage.getItem("Role"))
      this.showAdd = true
      console.log(this.showAdd)

    }else{
      this.showAdd = false;
    }
    this.dataSource = new MatTableDataSource();
  }

  ngAfterViewInit() {
    this.service.getPlans().subscribe(
      (res:any)=>{
        console.log(res.list);
        this.dataSource = new MatTableDataSource(res.list);
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
