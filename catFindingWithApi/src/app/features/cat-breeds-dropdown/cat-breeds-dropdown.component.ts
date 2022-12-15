import { Component } from '@angular/core';
import {Store} from "@ngrx/store";
import {CatsBreeds, CatsBreedsState} from "../../models/catBreedsState";
import {Observable} from "rxjs";
import {CatsBreedsActions} from "../../store/actions/catBreeds.actions";
import {CatsBreedsSelectors} from "../../store/selectors/catBreeds.selectors";
import {CatsApiActions} from "../../store/actions/catApi.actions";
import breedsURL = CatsBreedsSelectors.breedsURL;
import {CatApiService} from "../cat-api/services/cat-api.service";

@Component({
  selector: 'app-cat-breeds-dropdown',
  templateUrl: './cat-breeds-dropdown.component.html',
  styleUrls: ['./cat-breeds-dropdown.component.scss']
})
export class CatBreedsDropdownComponent {
  breeds$:Observable<CatsBreeds[]>
  breeds_select!: string

  constructor(
    private store$: Store<{}>,
    private catApiService:CatApiService
  ) {
    this.breeds$ = store$.select(CatsBreedsSelectors.breedsData)
  }

  logMatSelect() {
    this.store$.dispatch(CatsApiActions.clearCats())
   this.catApiService.setBreedToNull()
   this.catApiService.setBreed(this.breeds_select)
  }
}
