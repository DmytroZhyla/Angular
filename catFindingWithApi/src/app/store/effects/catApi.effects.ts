import {Actions, createEffect, ofType} from "@ngrx/effects";
import {Injectable} from "@angular/core";
import {Store} from "@ngrx/store";
import {map, mergeMap} from "rxjs";
import {CatsApiActions} from "../actions/catApi.actions";
import {CatApiService} from "../../features/cat-api/services/cat-api.service";

@Injectable()
export class CatsApiEffect {
  loadCatsApi$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(CatsApiActions.loadCats),
      mergeMap(() => {
        return this.catApiService.getAllImg().pipe(
          map(data => {
            return CatsApiActions.loadCatsSuccess({cats: data})
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
