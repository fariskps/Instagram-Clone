// core modules ====================================
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// core modules ====================================


// modules =============
import { AppRoutingModule } from './app-routing.module';
import { NgMatModule} from './modules/ng-mat/ng-mat.module';
// modules =============


// component
import { AppComponent } from './app.component';
import { PageFooterComponent } from './common-components/page-footer/page-footer.component';
// component


@NgModule({
  declarations: [
    AppComponent,
    PageFooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgMatModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
