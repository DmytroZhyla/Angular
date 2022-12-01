import {createSelector} from "@ngrx/store";
import {stopWatch, stopWatchState} from "../../interface/Stopwatch";

const selectStopwatch = (state:stopWatchState) => state.stopwatch;

export const selectStopwatchCounter = createSelector(
  selectStopwatch,
  (state:stopWatch) => {
    console.log(state)
    return state.counter}
);

