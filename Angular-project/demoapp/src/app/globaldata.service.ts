import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GlobaldataService {

  constructor() { }

  
  private id = new BehaviorSubject<any>(null);

  userid = this.id.asObservable();
  setUserId(data:any)
  {
    this.id.next(data);
  }
}
