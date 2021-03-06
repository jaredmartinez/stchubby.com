import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {AppComponent} from './app.component';
import {AppRoutingModule} from './app.routing.module';
import {CoreModule} from './core/core.module';
import {HomeModule} from './home/home.module';
import {SharedModule} from './shared/shared.module';
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
    SharedModule
  ],
  declarations: [
    AppComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
