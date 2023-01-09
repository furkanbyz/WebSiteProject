import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AboutUsComponent } from './components/about-us/about-us.component';
import { LogInComponent } from './components/log-in/log-in.component';
import { LogOutComponent } from './components/log-out/log-out.component';

import { ActorsComponent } from './components/actors/actors.component';
import { DrawersComponent } from './components/drawers/drawers.component';
import { WritersComponent } from './components/writers/writers.component';

import { HttpClientModule } from "@angular/common/http"
import { ApiServiceService } from './api-service.service';

import {FormsModule,ReactiveFormsModule} from "@angular/forms";
import { HomePageComponent } from './components/home-page/home-page.component';

@NgModule({
  declarations: [
    AppComponent,
    ActorsComponent,
    AboutUsComponent,
    LogInComponent,
    DrawersComponent,
    WritersComponent,
    LogOutComponent,
    HomePageComponent,
    
    
  ],
  imports: [
    FormsModule,
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [ApiServiceService],
  bootstrap: [AppComponent],
  exports: [RouterModule]
})
export class AppModule { }
