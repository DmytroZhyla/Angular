import {Component, OnInit} from '@angular/core';
import {debounceTime, interval, Observable, Subject, Subscription} from "rxjs";
import {Store} from "@ngrx/store";
import { stopwatchActions} from "../store/actions/stopwatch.actions";
import {selectStopwatchCounter} from "../store/selectors/stopwatch.selectors";
import {stopWatchState} from "../interface/Stopwatch";

@Component({
  selector: 'app-time-controllers',
  templateUrl: './time-controllers.component.html',
  styleUrls: ['./time-controllers.component.scss']
})
export class TimeControllersComponent implements OnInit {
  time$:Observable<number>;
  timeSubscription$!:Subscription
  inter$ = interval(1000)
  interSubscription$!:Subscription
  startStopText: 'Start' | 'Pause' = 'Start'
  startStopStatus: boolean = true
  rangerTime:number = 60;
  secondsInMinutes:number = 60;
  buttonClicked = new Subject<string>();


  constructor(
    private store$: Store<stopWatchState>
  ) {
    this.time$ = this.store$.select(selectStopwatchCounter)
  }


  ngOnInit(): void {

  }

  startStopStopwatch():void {
    if (this.startStopStatus){
      this.interSubscription$ = this.inter$.subscribe(()=>{
        this.store$.dispatch(stopwatchActions.countStart())
      })
      this.startStopText = 'Pause'
      this.startStopStatus = !this.startStopStatus
    }
    else {
      this.interSubscription$.unsubscribe()
      this.startStopText = 'Start'
      this.startStopStatus = !this.startStopStatus
    }
  }

  currentTime():number{
    let time = 0;
    this.timeSubscription$ = this.time$.subscribe((value=>{
      time = value
    }))
    this.timeSubscription$.unsubscribe()
    return time
  }

  timeChanging(value:number = 0,isPositive:boolean):void {
    let number: number
    if (isPositive){
      number = Number(value)
    }
    else{
      number = -Number(value)
    }
    this.store$.dispatch(stopwatchActions.countChangeNumber({number:number}))
    if (this.currentTime() < 0){
      this.store$.dispatch(stopwatchActions.countToZero())
    }
  }

  rangeChanging($event:any){
    this.rangerTime = $event.target.value
  }
}

