import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SharedModule} from "../shared/shared.module";
import {ContactComponent} from "./containers/contact.component";
import {ContactRoutingModule} from "./contact.routing.module";

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    ContactRoutingModule
  ],
  declarations: [
    ContactComponent
  ]
})
export class ContactModule { }
