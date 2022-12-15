import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CatApiComponent } from './components/cat-api.component';



@NgModule({
  declarations: [
    CatApiComponent
  ],
  exports: [
    CatApiComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CatApiModule { }
