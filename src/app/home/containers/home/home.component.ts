import { Component, OnInit } from '@angular/core';
import {AppConstants} from "../../../app.constants";

@Component({
  selector: 'home',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.css']
})
export class HomeComponent implements OnInit {

  tournamentDate: Date = AppConstants.GOLF_TOURNAMENT_DATE;

  constructor() { }

  ngOnInit() {
  }
  
  goToLink(url: string){
    window.open(url, "_blank");
  }

}
