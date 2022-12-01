import { Injectable } from '@angular/core';
import {interval, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class StopwatchService {

  constructor() { }

  time!:number


  startTime(){
   interval(1000).subscribe(x=> this.time = x)
  }

}
