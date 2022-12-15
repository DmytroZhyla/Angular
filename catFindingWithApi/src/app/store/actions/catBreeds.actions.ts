import {createAction, props} from "@ngrx/store";
import {CatsBreeds} from "../../models/catBreedsState";

export namespace CatsBreedsActions {

  export const loadBreeds = createAction(
    '[CatsBreeds Page] load Cats',
  )

  export const loadBreedsSuccess = createAction(
    '[CatsBreeds Page] load Cats Success',
    props<{ breeds:CatsBreeds[] | any }>()
  )

  export const loadBreedsFailure = createAction(
    '[CatsBreeds Page] load Cats Failed',
    props<{ error: string }>()
  )


  export const selectBreed = createAction(
    '[CatsBreeds Page] select breed',
      props<{ currentBreedUrl : string | null }>()
  )

  export const clearBreeds = createAction(
    '[CatsBreeds Page] clear all cats'
  )

}
