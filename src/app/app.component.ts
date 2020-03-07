import {Component, OnInit, HostListener} from "@angular/core";
import {NavigationEnd, Router} from "@angular/router";
import {BasePageComponent} from "./shared/base-page/base-page.component";

declare let gtag: Function;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent extends BasePageComponent implements OnInit {

  innerHeight: number;
  innerWidth: number;

  constructor(private router: Router) {
    super();
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        gtag('config', 'UA-159982987-1', {'page_path': event.urlAfterRedirects});
      }
    })
  }

  ngOnInit() {
    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
        return;
      }
      window.scrollTo(0, 0);
    });
    this.getWindowSize();
  }

  @HostListener('window:resize')
  getWindowSize() {
    console.log('inner height: ' + this.innerHeight);
    this.innerHeight = window.innerHeight - 80;
    this.innerWidth = window.innerWidth;
  }

}
