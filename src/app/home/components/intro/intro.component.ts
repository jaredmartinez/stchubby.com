import {Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'intro',
  templateUrl: 'intro.component.html',
  styleUrls: ['intro.component.css']
})
export class IntroComponent implements OnInit {

  @Input() tournamentDate: Date;

  constructor() { }

  ngOnInit() {
  }

}
