import {Routes, RouterModule} from "@angular/router";
import {NgModule} from "@angular/core";
import {TournamentInfoComponent} from "./containers/tournament-info.component";

const ROUTES: Routes = [
  //{ path: '',   redirectTo: '/home', pathMatch: 'full' },
  { path: '', component: TournamentInfoComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(ROUTES)
  ],
  exports: [
    RouterModule
  ]
})
export class TournamentInfoRoutingModule { }
