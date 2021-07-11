import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Consumer } from 'src/app/entities/consumer/consumer';

@Injectable({
  providedIn: 'root'
})
export class ConsumerService {

  private baseUrl = "https://localhost:44364/api/Consumer/"
  public currentConsumer:Consumer


  constructor(private http: HttpClient) { 
    this.currentConsumer = new Consumer("","","","","");

  }

  getConsumers()
  {
    return this.http.get(this.baseUrl)
  }

  addConsumer()
  {
    var consumer:Consumer = this.currentConsumer
    var name = consumer.name
    var surname = consumer.surname
    var street = consumer.street
    var phone = consumer.phone
    var type = consumer.type

    var body = {name, surname, phone, type, street}
    console.log(body)

    this.currentConsumer = new Consumer("","","","","");

    return this.http.post(this.baseUrl, body)
  }

  getConsumerIds()
  {
    return this.http.get(this.baseUrl + "GetConsumerIds");
  }

  delete(id:number)
  {
    return this.http.delete(this.baseUrl + id)
  }
}
