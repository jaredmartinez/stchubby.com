import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'home-sponsors',
  templateUrl: 'home-sponsors.component.html',
  styleUrls: ['home-sponsors.component.css']
})
export class HomeSponsorsComponent implements OnInit {
  
  @Output() openUrl = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

}
