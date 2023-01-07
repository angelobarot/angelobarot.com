import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AboutComponent } from './modules/about/about.component';
import { ContactComponent } from './modules/contact/contact.component'
import { HomeComponent } from './modules/home/home.component';

const routes: Routes = [
  {
    path: '', component: HomeComponent, pathMatch: 'full'
  },
  {
    path: 'about', component: AboutComponent
  },
  {
    path: 'contact', component: ContactComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
