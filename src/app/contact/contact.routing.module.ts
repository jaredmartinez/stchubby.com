import {Routes, RouterModule} from "@angular/router";
import {NgModule} from "@angular/core";
import {ContactComponent} from "./containers/contact.component";

const ROUTES: Routes = [
  //{ path: '',   redirectTo: '/home', pathMatch: 'full' },
  { path: '', component: ContactComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(ROUTES)
  ],
  exports: [
    RouterModule
  ]
})
export class ContactRoutingModule { }
