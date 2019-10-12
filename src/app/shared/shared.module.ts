import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ButtonContainerComponent} from "./button-container/button-container.component";
import {SubHeaderComponent} from "./sub-header/sub-header.component";
import {BasePageComponent} from "./base-page/base-page.component";
import {SectionHeaderComponent} from "./section-header/section-header.component";
import {RouterModule} from "@angular/router";
import {FormsModule} from "@angular/forms";

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ],
  declarations: [
    SectionHeaderComponent,
    BasePageComponent,
    SubHeaderComponent,
    ButtonContainerComponent
  ],
  exports: [
    RouterModule,
    FormsModule,
    SectionHeaderComponent,
    BasePageComponent,
    SubHeaderComponent,
    ButtonContainerComponent
  ]
})
export class SharedModule { }
