import {Component, OnInit, HostListener, ElementRef, Inject} from '@angular/core';
import {DOCUMENT} from "@angular/platform-browser";

@Component({
  selector: 'nav-bar',
  templateUrl: 'nav-bar.component.html',
  styleUrls: ['nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  collapse = true;

  constructor(private _el: ElementRef, @Inject(DOCUMENT) private document: Document) { }

  ngOnInit() {
  }

  @HostListener('window:scroll')
  isPageScrolledDown() {
    let scrollDistance = this.document.body.scrollTop;
    if (scrollDistance > 50) {
      return true
    }
    return false;
  }

  toggleNav() {
    this.collapse = !this.collapse;
  }

}
