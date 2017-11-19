import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SharedModule} from "../shared/shared.module";
import {SponsorRoutingModule} from "./sponsor.routing.module";
import {SponsorComponent} from "./containers/sponsor.component";

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    SponsorRoutingModule
  ],
  declarations: [
    SponsorComponent
  ]
})
export class SponsorModule { }
