import { Component } from '@angular/core';
import {Store} from "@ngrx/store";
import {CatApiService} from "../../features/cat-api/services/cat-api.service";
import {CatsApiActions} from "../../store/actions/catApi.actions";
import {Observable} from "rxjs";
import {CatsBreeds} from "../../models/catBreedsState";
import {CatsBreedsSelectors} from "../../store/selectors/catBreeds.selectors";
import {CatsBreedsActions} from "../../store/actions/catBreeds.actions";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent {

  constructor(
    private store$: Store<{}>,
  ) {
    this.store$.dispatch(CatsBreedsActions.loadBreeds())
  }

  showAllCats() {
    this.store$.dispatch(CatsApiActions.loadCats())
  }
}
