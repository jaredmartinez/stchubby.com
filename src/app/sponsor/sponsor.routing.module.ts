import {Routes, RouterModule} from "@angular/router";
import {NgModule} from "@angular/core";
import {SponsorComponent} from "./containers/sponsor.component";

const ROUTES: Routes = [
  //{ path: '',   redirectTo: '/home', pathMatch: 'full' },
  { path: '', component: SponsorComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(ROUTES)
  ],
  exports: [
    RouterModule
  ]
})
export class SponsorRoutingModule { }
