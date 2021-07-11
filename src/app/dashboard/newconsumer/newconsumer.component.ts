import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Consumer } from 'src/app/entities/consumer/consumer';
import { Street } from 'src/app/entities/street/street';
import { ConsumerService } from 'src/app/services/consumer/consumer.service';

@Component({
  selector: 'app-newconsumer',
  templateUrl: './newconsumer.component.html',
  styleUrls: ['./newconsumer.component.css']
})
export class NewconsumerComponent implements OnInit {

  public consumer:Consumer
  streets:Street[] | undefined;
  selectedStreet!:string;

  constructor(private service: ConsumerService, private router: Router) {

    this.consumer = service.currentConsumer

    
   }

  ngOnInit(): void {
  }

  onSubmit(){
    this.service.addConsumer().subscribe(
      (res:any)=>{
        this.router.navigateByUrl("/consumer");
        //this.toastr.success('You successfully added new consumer!');
        
      },
      err=>{
        console.log(err);
        //this.toastr.error('Invalid');
      }
    )
  }

  ngOnDestroy()
  {


    this.service.currentConsumer = this.consumer
  }

}
