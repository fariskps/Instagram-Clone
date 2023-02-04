// core modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
// core modules

// modules
import { HomePageRoutingModule } from './home-page-routing.module';
import { NgMatModule } from '../ng-mat/ng-mat.module';
// modules

// components ==================================
import { FeedBoxComponent } from './components/feed-box/feed-box.component';
import { FeedImageComponent } from './components/feed-image/feed-image.component';
import { HomePageHeaderComponent } from './components/home-page-header/home-page-header.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { ReactionWraperComponent } from '../../common-components/reaction-wraper/reaction-wraper.component';

// components ==================================

// service ================
import { HomePageService } from './home-page.service';
// service ================



@NgModule({
  declarations: [
    HomePageHeaderComponent,
    HomePageComponent,
    FeedBoxComponent,
    FeedImageComponent,
    ReactionWraperComponent
  ],
  imports: [
    CommonModule,
    HomePageRoutingModule,
    NgMatModule,
    HttpClientModule
  ],
  providers: [
    HomePageService
  ]
})
export class HomePageModule { }
