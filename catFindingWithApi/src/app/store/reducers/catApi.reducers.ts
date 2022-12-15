import {CatsApiActions} from "../actions/catApi.actions";
import {createReducer, on} from "@ngrx/store";
import {CatsApiState} from "../../models/catsApiState";

const initialState: CatsApiState = {
  cats: [],
  status: "pending",
  error: null,
}

export const CatsApiReducer = createReducer(
  initialState,

  on(CatsApiActions.loadCats, (state) => ({
    ...state,
    status: 'loading'
  })),

  on(CatsApiActions.loadCatsSuccess, (state, {cats}) => ({
    ...state,
    cats: cats,
    status: 'success',
    error: null
  })),

  on(CatsApiActions.loadCatsFailure, (state, {error}) => ({
    ...state,
    status: 'error',
    error: error
  })),

  on(CatsApiActions.clearCats, (state) => ({
    ...state,
    cats: [],
    status: 'pending',
    error: null
  })),

);

