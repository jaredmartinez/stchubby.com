import { Component, OnInit } from '@angular/core';
import {AppConstants} from "../../app.constants";

@Component({
  selector: 'tournament-info',
  templateUrl: 'tournament-info.component.html',
  styleUrls: ['tournament-info.component.css']
})
export class TournamentInfoComponent implements OnInit {

  lat = 30.0268759;
  long = -97.8789529;

  constructor() { }

  ngOnInit() {
  }

}
