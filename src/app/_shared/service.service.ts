import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
subscribeAuth = new Subject<any>();

  constructor() { }
  transferData(data) {
    console.log(data);
    this.subscribeAuth.next(data);
  }
}
