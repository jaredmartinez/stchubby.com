import {AboutComponent} from "./containers/about.component";
import {Routes, RouterModule} from "@angular/router";
import {NgModule} from "@angular/core";

const routes: Routes = [
  //{ path: '',   redirectTo: '/home', pathMatch: 'full' },
  { path: '', component: AboutComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AboutRoutingModule { }
