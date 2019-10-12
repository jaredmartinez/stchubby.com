import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NavBarComponent} from "./components/nav-bar/nav-bar.component";
import {FooterBarComponent} from "./components/footer-bar/footer-bar.component";
import {HttpModule} from "@angular/http";
import {BrowserModule} from "@angular/platform-browser";
import {RouterModule} from "@angular/router";
import {FormsModule} from "@angular/forms";

@NgModule({
  imports: [
    CommonModule,
    HttpModule,
    BrowserModule,
    RouterModule,
    FormsModule
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
