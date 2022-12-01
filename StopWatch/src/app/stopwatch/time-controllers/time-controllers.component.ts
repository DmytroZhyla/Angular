import {Component, OnInit} from '@angular/core';
import {interval, Observable, Subscription} from "rxjs";
import {Store} from "@ngrx/store";
import {stopwatchActions} from "../store/actions/stopwatch.actions";

@Component({
  selector: 'app-time-controllers',
  templateUrl: './time-controllers.component.html',
  styleUrls: ['./time-controllers.component.scss']
})
export class TimeControllersComponent implements OnInit {

  startClicked:boolean = false
  constructor(
    private store$: Store<{}>
  ) {}

  inter$ = interval(1000)
  interSubscription$!:Subscription
  startStopText: 'Start' | 'Stop' = 'Start'
  startStopStatus: boolean = true

  ngOnInit(): void {
  }

  startStopStopwatch() {
    if (this.startStopStatus){
      this.interSubscription$ = this.inter$.subscribe(()=>{
        this.store$.dispatch(stopwatchActions.countStart())
      })
      this.startStopText = 'Stop'
      this.startStopStatus = !this.startStopStatus
    }
    else {
      this.interSubscription$.unsubscribe()
      this.startStopText = 'Start'
      this.startStopStatus = !this.startStopStatus
    }
  }
}
