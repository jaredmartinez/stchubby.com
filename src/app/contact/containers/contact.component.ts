import {Component, OnInit} from "@angular/core";
import {BasePageComponent} from "../../shared/base-page/base-page.component";

@Component({
  selector: 'contact',
  templateUrl: 'contact.component.html',
  styleUrls: ['contact.component.css']
})
export class ContactComponent extends BasePageComponent implements OnInit {

  constructor() {
    super();
  }

  ngOnInit() {
  }

}
