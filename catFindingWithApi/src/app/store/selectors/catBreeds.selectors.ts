import {createFeatureSelector, createSelector} from "@ngrx/store";
import {CatsApiState} from "../../models/catsApiState";
import {CatsBreedsState} from "../../models/catBreedsState";

export namespace CatsBreedsSelectors {
  export const state = createFeatureSelector<CatsBreedsState>("breeds")

  export const breedsData = createSelector(state, (state) => {
    return state.breeds
  })

  export const breedsURL = createSelector(state, (state) => {
    return state.currentBreedUrl
  })
}
