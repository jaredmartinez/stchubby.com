import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css']
})
export class LocationComponent implements OnInit {

  lat = 30.0268759;
  long = -97.8789529;

  constructor() { }

  ngOnInit() {
  }

}
