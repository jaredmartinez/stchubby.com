import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SharedModule} from "../shared/shared.module";
import {GalleryRoutingModule} from "./gallery.routing.module";
import {GalleryComponent} from "./containers/gallery.component";

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    GalleryRoutingModule
  ],
  declarations: [
    GalleryComponent
  ]
})
export class GalleryModule { }
