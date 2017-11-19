import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {AboutComponent} from "./containers/about.component";
import {SharedModule} from "../shared/shared.module";
import {AboutRoutingModule} from "./about.routing.module";

@NgModule({
  imports: [
    CommonModule,
    AboutRoutingModule,
    SharedModule
  ],
  declarations: [
    AboutComponent
  ]
})
export class AboutModule { }
