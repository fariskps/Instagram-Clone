import { NgModule } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatBadgeModule} from '@angular/material/badge';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {ScrollingModule} from '@angular/cdk/scrolling';
@NgModule({
  imports: [
    MatToolbarModule,
    MatIconModule,
    MatBadgeModule,
    MatButtonToggleModule,
    ScrollingModule
  ],
  exports: [
    MatToolbarModule,
    MatIconModule,
    MatBadgeModule,
    MatButtonToggleModule,
    ScrollingModule
  ]
})
export class NgMatModule { }
