import {createAction, props} from "@ngrx/store";


export namespace stopwatchActions {
  export const countStart = createAction(
    '[Stopwatch Page] Counter Start'
  )

  export const countChangeNumber = createAction(
    '[Stopwatch Page] Change number by value ',
    props<{number:number}>()
  )

}
