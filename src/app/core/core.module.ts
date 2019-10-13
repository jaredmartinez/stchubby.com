import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NavBarComponent} from "./components/nav-bar/nav-bar.component";
import {FooterBarComponent} from "./components/footer-bar/footer-bar.component";
import {BrowserModule} from "@angular/platform-browser";
import {RouterModule} from "@angular/router";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    BrowserModule,
    RouterModule,
  ],
  declarations: [
    NavBarComponent,
    FooterBarComponent
  ],
  exports: [
    NavBarComponent,
    FooterBarComponent
  ]
})
export class CoreModule { }
