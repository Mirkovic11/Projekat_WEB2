import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MainService {

  constructor() { }
  loadData(): Array<number[]> {
    return this.mockedData();
  }

  mockedData() : Array<number[]> {
    let lista=new Array<number[]>();
    let pi=[51,83,19,24];
    let ui=[33,100,56,16];
    let wp=[20];
    let wr=[25];
    let sd=[55];

    lista.push(pi);
    lista.push(ui);
    lista.push(wp);
    lista.push(wr);
    lista.push(sd);

    return lista;
  }
}
