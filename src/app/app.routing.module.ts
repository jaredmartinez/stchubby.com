import {Routes, RouterModule} from "@angular/router";
import {NgModule} from "@angular/core";
import {HomeComponent} from "./home/home.component";
import {TournamentInfoComponent} from "./tournament-info/tournament-info.component";
import {ContactComponent} from "./contact/contact.component";
import {RegisterComponent} from "./register/register.component";
import {SponsorComponent} from "./sponsor/sponsor.component";
import {AboutComponent} from "./about/about.component";
import {LocationComponent} from "./location/location.component";

const appRoutes: Routes = [
  { path: '',   redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'sponsor', component: SponsorComponent },
  { path: 'location', component: LocationComponent },
  { path: 'contact', component: ContactComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
