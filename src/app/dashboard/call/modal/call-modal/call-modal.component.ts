import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { RegisteredUser } from 'src/app/entities/registeredUser/registered-user';
import { CallService } from 'src/app/services/call/call.service';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-call-modal',
  templateUrl: './call-modal.component.html',
  styleUrls: ['./call-modal.component.css']
})
export class CallModalComponent implements OnInit {

  displayedColumns: string[] = ['username', 'fullName', 'street'];
  dataSource: MatTableDataSource<RegisteredUser>;

  
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  selectedId:string;

  constructor(public dialogRef: MatDialogRef<CallModalComponent>, private userService: UserService, private callService:CallService) {
    this.dataSource=new MatTableDataSource();
    this.selectedId="";
     }

  ngOnInit(): void {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngAfterViewInit(){
    this.userService.getAllUsers().subscribe((res:any)=>
    {
      console.log("korisnici "+res);
      var sviKorisnici:RegisteredUser[]=res.lista;
      this.dataSource=new MatTableDataSource(res);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    },
    err=>{
      console.log(err);
    });
  }

  ok():void {
    
  }

  
applyFilter(event: Event) {
  const filterValue = (event.target as HTMLInputElement).value;
  this.dataSource.filter = filterValue.trim().toLowerCase();


  if (this.dataSource.paginator) {
    this.dataSource.paginator.firstPage();
  }
}
}
