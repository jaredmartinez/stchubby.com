import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { NavBarComponent } from './layout/nav-bar/nav-bar.component';
import { MissionComponent } from './home/mission/mission.component';
import { TournamentInfoComponent } from './tournament-info/tournament-info.component';
import { IntroComponent } from './home/intro/intro.component';
import { CountdownComponent } from './home/countdown/countdown.component';
import { FooterBarComponent } from './layout/footer-bar/footer-bar.component';
import { HomeComponent } from './home/home.component';
import {AppRoutingModule} from "./app.routing.module";
import { SponsorComponent } from './sponsor/sponsor.component';
import { ContactComponent } from './contact/contact.component';
import { GalleryComponent } from './gallery/gallery.component';
import { NewsComponent } from './home/news/news.component';
import { RegisterComponent } from './register/register.component';
import { SectionHeaderComponent } from './shared/section-header/section-header.component';
import { BasePageComponent } from './shared/base-page/base-page.component';
import {AgmCoreModule} from "angular2-google-maps/core";
import { HomeLocationComponent } from './home/home-location/home-location.component';
import { HomeSponsorsComponent } from './home/home-sponsors/home-sponsors.component';
import { HomeGalleryComponent } from './home/home-gallery/home-gallery.component';
import { AboutComponent } from './about/about.component';
import { LocationComponent } from './location/location.component';
import { SubHeaderComponent } from './shared/sub-header/sub-header.component';
import { ButtonContainerComponent } from './shared/button-container/button-container.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    MissionComponent,
    TournamentInfoComponent,
    IntroComponent,
    CountdownComponent,
    FooterBarComponent,
    HomeComponent,
    SponsorComponent,
    ContactComponent,
    GalleryComponent,
    NewsComponent,
    RegisterComponent,
    SectionHeaderComponent,
    BasePageComponent,
    HomeLocationComponent,
    HomeSponsorsComponent,
    HomeGalleryComponent,
    AboutComponent,
    LocationComponent,
    SubHeaderComponent,
    ButtonContainerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCSx0Vdeped6o7UJiRurhS_PGt1NNkHFyg'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
