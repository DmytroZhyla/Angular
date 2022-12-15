import {NgModule, isDevMode} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HttpClientModule} from "@angular/common/http";
import {httpInterceptorProviders} from "./interceptors/apiKey-interceptor";
import {CoreModule} from "./core/core.module";
import {StoreModule} from '@ngrx/store';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {EffectsModule} from '@ngrx/effects';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {CatsApiEffect} from "./store/effects/catApi.effects";
import {CatsApiReducer} from "./store/reducers/catApi.reducers";
import {CatApiModule} from "./features/cat-api/cat-api.module";
import {FeaturesModule} from "./features/features.module";
import {FormsModule} from "@angular/forms";
import {CatsBreedsReducer} from "./store/reducers/catBreeds.reducers";
import {CatsBreedsEffect} from "./store/effects/catBreeds.effects";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    FeaturesModule,
    HttpClientModule,
    StoreModule.forFeature('cats', CatsApiReducer),
    StoreModule.forFeature('breeds', CatsBreedsReducer),
    StoreModule.forRoot({}, {}),
    StoreDevtoolsModule.instrument({maxAge: 25, logOnly: !isDevMode()}),
    EffectsModule.forRoot([CatsApiEffect,CatsBreedsEffect]),
    BrowserAnimationsModule,
    CatApiModule,
    FormsModule,
  ],
  providers: [httpInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule {
}
