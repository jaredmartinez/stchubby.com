import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {SharedModule} from "../shared/shared.module";
import {TournamentInfoComponent} from "./containers/tournament-info.component";
import {TournamentInfoRoutingModule} from "./tournament-info.routing.module";
import {TournamentDetailsComponent} from "./components/tournament-details/tournament-details.component";
import {TournamentMapComponent} from "./components/tournament-map/tournament-map.component";
import {TournamentRegistrationComponent} from "./components/tournament-registration/tournament-registration.component";
import { AgmCoreModule } from '@agm/core';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    TournamentInfoRoutingModule,
    AgmCoreModule,
  ],
  declarations: [
    TournamentInfoComponent,
    TournamentDetailsComponent,
    TournamentMapComponent,
    TournamentRegistrationComponent
  ]
})
export class TournamentInfoModule { }
