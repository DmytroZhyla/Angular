import {createFeatureSelector, createSelector} from "@ngrx/store";
import {CatsApiState} from "../../models/catsApiState";

export namespace CatsSelectors {
  export const state = createFeatureSelector<CatsApiState>("cats")

  export const catsData = createSelector(state, (state) => {
    return state.cats
  })
}
