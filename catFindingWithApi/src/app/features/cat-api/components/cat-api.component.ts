import { Component } from '@angular/core';
import {Observable} from "rxjs";
import {CatsImage} from "../../../models/catsApiState";
import {Store} from "@ngrx/store";
import {CatsSelectors} from "../../../store/selectors/catApi.selectors";
import {CatApiService} from "../services/cat-api.service";
import {CatsBreeds} from "../../../models/catBreedsState";
import {CatsBreedsSelectors} from "../../../store/selectors/catBreeds.selectors";


@Component({
  selector: 'app-cat-api',
  templateUrl: './cat-api.component.html',
  styleUrls: ['./cat-api.component.scss']
})
export class CatApiComponent {
  CatsApiArr$:Observable<CatsImage[]>
  CatBreed$:Observable<string | null>
  constructor(
    private store$: Store<{}>,
    private catService:CatApiService
  ) {
    this.CatsApiArr$ = this.store$.select(CatsSelectors.catsData)
    this.CatBreed$ = this.store$.select(CatsBreedsSelectors.breedsURL)
  }

}
