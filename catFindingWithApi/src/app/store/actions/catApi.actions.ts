import {createAction, props} from "@ngrx/store";
import {CatsImage} from "../../models/catsApiState";

export namespace CatsApiActions {

  export const loadCats = createAction(
    '[CatsApi Page] load Cats',
  )

  export const loadCatsSuccess = createAction(
    '[CatsApi Page] load Cats Success',
    props<{ cats:CatsImage[] | any }>()
  )

  export const loadCatsFailure = createAction(
    '[CatsApi Page] load Cats Failed',
    props<{ error: string }>()
  )

  export const clearCats = createAction(
    '[CatsApi Page] clear all cats'
  )

  }
