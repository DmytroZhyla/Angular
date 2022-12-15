import {Actions, createEffect, ofType} from "@ngrx/effects";
import {Injectable} from "@angular/core";
import {Store} from "@ngrx/store";
import {map, mergeMap} from "rxjs";
import {CatApiService} from "../../features/cat-api/services/cat-api.service";
import {CatsBreedsActions} from "../actions/catBreeds.actions";

@Injectable()
export class CatsBreedsEffect {
  loadCatsBreeds$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(CatsBreedsActions.loadBreeds),
      mergeMap(() => {
        return this.catApiService.getAllBreeds().pipe(
          map(data => {
            return CatsBreedsActions.loadBreedsSuccess({breeds:data})
          }),
        )
      })
    )
  })

  constructor(
    private actions$: Actions,
    private store$: Store,
    private catApiService: CatApiService
  ) {
  }
}
