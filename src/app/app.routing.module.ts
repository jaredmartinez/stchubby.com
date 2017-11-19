import {Routes, RouterModule} from "@angular/router";
import {NgModule} from "@angular/core";
import {HomeComponent} from "./home/containers/home/home.component";

const appRoutes: Routes = [
  //{ path: '',   redirectTo: '/home', pathMatch: 'full' },
  { path: '', component: HomeComponent },
  { path: 'about', loadChildren: './about/about.module#AboutModule' },
  { path: 'tournament', loadChildren: './tournament-info/tournament-info.module#TournamentInfoModule' },
  { path: 'gallery', loadChildren: './gallery/gallery.module#GalleryModule' },
  { path: 'sponsor', loadChildren: './sponsor/sponsor.module#SponsorModule' },
  { path: 'contact', loadChildren: './contact/contact.module#ContactModule' }
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
