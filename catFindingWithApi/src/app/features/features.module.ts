import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CatApiModule} from "./cat-api/cat-api.module";
import { DropdownPagesComponent } from './dropdown-pages/dropdown-pages.component';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatSelectModule} from "@angular/material/select";
import {FormsModule} from "@angular/forms";
import { CatBreedsDropdownComponent } from './cat-breeds-dropdown/cat-breeds-dropdown.component';



@NgModule({
  declarations: [
    DropdownPagesComponent,
    CatBreedsDropdownComponent
  ],
    exports: [
        DropdownPagesComponent,
        CatBreedsDropdownComponent
    ],
  imports: [
    CommonModule,
    CatApiModule,
    MatFormFieldModule,
    MatSelectModule,
    FormsModule
  ]
})
export class FeaturesModule { }
