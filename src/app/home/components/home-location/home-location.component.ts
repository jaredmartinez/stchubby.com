import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'home-location',
  templateUrl: 'home-location.component.html',
  styleUrls: ['home-location.component.css']
})
export class HomeLocationComponent implements OnInit {

  @Input() tournamentDate: Date;
  
  @Output() openUrl = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

}
