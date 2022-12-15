import { Component } from '@angular/core';
import {Store} from "@ngrx/store";
import {CatsApiActions} from "../../store/actions/catApi.actions";
import {CatApiService} from "../cat-api/services/cat-api.service";

@Component({
  selector: 'app-dropdown-pages',
  templateUrl: './dropdown-pages.component.html',
  styleUrls: ['./dropdown-pages.component.scss']
})
export class DropdownPagesComponent {

  constructor(
    private store$: Store<{}>,
    private catApiService: CatApiService
  ) {
  }

  numberOfPages = [10,25,50,100]
  mat_select:number = 10 | 25 | 50 | 100

  logMatSelect() {
    this.store$.dispatch(CatsApiActions.clearCats())
    this.catApiService.setPicturesNumber(this.mat_select)
  }
}
