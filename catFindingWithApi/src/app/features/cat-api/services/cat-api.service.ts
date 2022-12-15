import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map} from "rxjs";
import {Store} from "@ngrx/store";
import {CatsBreedsActions} from "../../../store/actions/catBreeds.actions";

@Injectable({
  providedIn: 'root'
})
export class CatApiService {

  limit = 10;
  CatApiURL:string = `https://api.thecatapi.com/v1/images/search?limit=${this.limit}`
  CatBreedsURL:string = 'https://api.thecatapi.com/v1/breeds'
  constructor(
   private http:HttpClient,
   private store$: Store<{}>,

  ) { }

  setPicturesNumber(limit:number){
    this.CatApiURL = `https://api.thecatapi.com/v1/images/search?limit=${limit}`
  }

  getAllImg() {
    return this.http.get(this.CatApiURL).pipe(
      map((data) => {
        return data
      })
    );
  }

  getAllBreeds(){
    return this.http.get(this.CatBreedsURL).pipe(
      map((data) => {
        console.log(data)
        return data
      })
    );
  }

  setBreed(breed:string){
    this.store$.dispatch(CatsBreedsActions.selectBreed(
      {currentBreedUrl:`https://api.thecatapi.com/v1/images/search?breed_ids=${breed}`}))
  }

  setBreedToNull(){
    this.store$.dispatch(CatsBreedsActions.selectBreed(
      {currentBreedUrl:null}))
  }



}
