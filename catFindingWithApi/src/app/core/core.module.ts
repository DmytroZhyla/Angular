import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import {MatButtonModule} from "@angular/material/button";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatIconModule} from "@angular/material/icon";
import {FormsModule} from "@angular/forms";
import {FeaturesModule} from "../features/features.module";



@NgModule({
  declarations: [
    HeaderComponent
  ],
  exports: [
    HeaderComponent
  ],
    imports: [
        CommonModule,
        MatButtonModule,
        MatFormFieldModule,
        MatIconModule,
        FormsModule,
        FeaturesModule
    ]
})
export class CoreModule { }
