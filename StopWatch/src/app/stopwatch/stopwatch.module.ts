import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TimeFieldComponent} from "./time-field/time-field.component";
import {TimeHistoryComponent} from "./time-history/time-history.component";
import {StopwatchComponent} from "./stopwatch.component";
import {StopwatchService} from "./services/stopwatch.service";
import { TimeControllersComponent } from './time-controllers/time-controllers.component';
import {StoreModule} from "@ngrx/store";
import {stopwatchReducers} from "./store/reducers/stopwatch.reducers";
import {TimePipe} from "./pipes/time.pipe";



@NgModule({
  declarations: [
    TimeFieldComponent,
    TimeHistoryComponent,
    TimeControllersComponent,
    StopwatchComponent,
    TimePipe
  ],
  imports: [
    CommonModule,
    StoreModule.forFeature('stopwatch', stopwatchReducers)
  ],
  exports:[
    StopwatchComponent,
  ],
  providers:[StopwatchService]

})
export class StopwatchModule { }
