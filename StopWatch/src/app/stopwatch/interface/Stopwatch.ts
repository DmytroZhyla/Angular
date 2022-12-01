export interface stopWatchState {
  stopwatch:stopWatch
}

export interface stopWatch{
  counter:number
  type: 'day' | 'hours' | 'minutes' | 'seconds'
}
