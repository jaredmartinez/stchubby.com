import {Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'tournament-map',
  templateUrl: './tournament-map.component.html',
  styleUrls: ['./tournament-map.component.css']
})
export class TournamentMapComponent implements OnInit {

  @Input() lat = 30.0268759;
  @Input() long = -97.8789529;

  constructor() { }

  ngOnInit() {
  }

}
