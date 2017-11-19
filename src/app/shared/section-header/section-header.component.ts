import {Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'section-header',
  templateUrl: './section-header.component.html',
  styleUrls: ['./section-header.component.css']
})
export class SectionHeaderComponent implements OnInit {

  @Input() text;

  constructor() { }

  ngOnInit() {
  }

}
