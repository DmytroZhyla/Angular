import {createReducer, on} from "@ngrx/store";
import {stopwatchActions} from "../actions/stopwatch.actions";
import {state} from "@angular/animations";


export const initialState= {
  counter:0
};

export const stopwatchReducers = createReducer(
  initialState,
  on(stopwatchActions.countStart,
    state => ({
      ...state,
      counter: state.counter + 1
    })),

  on(stopwatchActions.countChangeNumber,
    (state, { number }) =>
    ({
      ...state,
      counter: state.counter + number
    }))
);
