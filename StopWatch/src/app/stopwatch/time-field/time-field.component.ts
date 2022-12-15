import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {Store} from "@ngrx/store";
import {stopWatchState} from "../interface/Stopwatch";
import {selectStopwatchCounter} from "../store/selectors/stopwatch.selectors";

@Component({
  selector: 'app-time-field',
  templateUrl: './time-field.component.html',
  styleUrls: ['./time-field.component.scss']
})
export class TimeFieldComponent implements OnInit {
  time$:Observable<number>;

  constructor(
    private store$: Store<stopWatchState>
  ) {
    this.time$ = this.store$.select(selectStopwatchCounter)
  }

  ngOnInit(): void {
  }

}

