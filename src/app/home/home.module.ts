import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HomeComponent} from "./containers/home/home.component";
import {HomeGalleryComponent} from "./components/home-gallery/home-gallery.component";
import {HomeSponsorsComponent} from "./components/home-sponsors/home-sponsors.component";
import {HomeLocationComponent} from "./components/home-location/home-location.component";
import {IntroComponent} from "./components/intro/intro.component";
import {MissionComponent} from "./components/mission/mission.component";
import {NewsComponent} from "./components/news/news.component";
import {SharedModule} from "../shared/shared.module";
import {CountdownComponent} from "./components/countdown/countdown.component";

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [
    HomeComponent,
    HomeLocationComponent,
    HomeSponsorsComponent,
    HomeGalleryComponent,
    IntroComponent,
    MissionComponent,
    NewsComponent,
    CountdownComponent
  ]

})
export class HomeModule { }
