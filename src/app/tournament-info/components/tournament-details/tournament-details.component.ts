import { Component, OnInit } from '@angular/core';
import {AppConstants} from "../../../app.constants";

@Component({
  selector: 'tournament-details',
  templateUrl: './tournament-details.component.html',
  styleUrls: ['./tournament-details.component.css']
})
export class TournamentDetailsComponent implements OnInit {

  tournamentDate: Date = AppConstants.GOLF_TOURNAMENT_DATE;

  constructor() { }

  ngOnInit() {
  }

}
