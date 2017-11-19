import {Routes, RouterModule} from "@angular/router";
import {NgModule} from "@angular/core";
import {GalleryComponent} from "./containers/gallery.component";

const ROUTES: Routes = [
  //{ path: '',   redirectTo: '/home', pathMatch: 'full' },
  { path: '', component: GalleryComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(ROUTES)
  ],
  exports: [
    RouterModule
  ]
})
export class GalleryRoutingModule { }
