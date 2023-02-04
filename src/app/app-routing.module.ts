import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomePageModule} from './modules/home-page/home-page.module';
const routes: Routes = [
  {
   path:"",
   loadChildren:()=> HomePageModule,
  },
  {
   path: '**',
   redirectTo: '',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
