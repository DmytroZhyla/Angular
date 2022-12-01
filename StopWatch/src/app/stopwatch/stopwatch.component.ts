import { Component, OnInit } from '@angular/core';
import {StopwatchService} from "./services/stopwatch.service";

@Component({
  selector: 'app-stopwatch',
  templateUrl: './stopwatch.component.html',
  styleUrls: ['./stopwatch.component.scss']
})
export class StopwatchComponent implements OnInit {

  constructor() { }



  ngOnInit(): void {
  }

}
