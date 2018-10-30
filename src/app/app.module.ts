import {NgModule, NO_ERRORS_SCHEMA} from "@angular/core";
import {FormsModule} from "@angular/forms";
import {AppComponent} from "./app.component";
import {AppRoutingModule} from "./app.routing.module";
import {CoreModule} from "./core/core.module";
import {HomeModule} from "./home/home.module";
import {SharedModule} from "./shared/shared.module";
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { AgmCoreModule } from '@agm/core';

@NgModule({
  imports: [
    FormsModule,
    CoreModule,
    AppRoutingModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCSx0Vdeped6o7UJiRurhS_PGt1NNkHFyg'
    }),
    HomeModule,
    SharedModule,
    MDBBootstrapModule.forRoot()
  ],
  declarations: [
    AppComponent
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [ NO_ERRORS_SCHEMA ]
})
export class AppModule { }
