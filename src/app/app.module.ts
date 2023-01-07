import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AboutComponent } from './modules/about/about.component'
import { CareerComponent } from './modules/career/career.component'
import { HomeComponent } from './modules/home/home.component'

import { HeaderComponent } from './components/header/header.component'
import { NavigationComponent } from './components/navigation-bar/navigation-bar.component'

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    CareerComponent,
    HeaderComponent,
    HomeComponent,
    NavigationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [
    AppComponent,
    AboutComponent,
    CareerComponent,
    HeaderComponent,
    HomeComponent,
    NavigationComponent
  ]
})
export class AppModule { }
