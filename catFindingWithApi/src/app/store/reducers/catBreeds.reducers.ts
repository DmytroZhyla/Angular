import {createReducer, on} from "@ngrx/store";
import {CatsBreedsState} from "../../models/catBreedsState";
import {CatsBreedsActions} from "../actions/catBreeds.actions";

const initialState: CatsBreedsState = {
  breeds: [],
  status: "pending",
  error: null,
  currentBreedUrl:null
}

export const CatsBreedsReducer = createReducer(
  initialState,

  on(CatsBreedsActions.loadBreeds, (state) => ({
    ...state,
    status: 'loading'
  })),

  on(CatsBreedsActions.loadBreedsSuccess, (state, {breeds}) => ({
    ...state,
    breeds: breeds,
    status: 'success',
    error: null
  })),

  on(CatsBreedsActions.loadBreedsFailure, (state, {error}) => ({
    ...state,
    status: 'error',
    error: error
  })),

  on(CatsBreedsActions.clearBreeds, (state) => ({
    ...state,
    breeds: [],
    status: 'pending',
    error: null
  })),

  on(CatsBreedsActions.selectBreed, (state,{currentBreedUrl}) => ({
    ...state,
    currentBreedUrl:currentBreedUrl
  })),
);

