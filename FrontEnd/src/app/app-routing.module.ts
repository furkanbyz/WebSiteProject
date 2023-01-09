import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutUsComponent } from "./components/about-us/about-us.component";
import { ActorsComponent } from "./components/actors/actors.component";
import { DrawersComponent } from './components/drawers/drawers.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { LogInComponent } from './components/log-in/log-in.component';
import { LogOutComponent } from './components/log-out/log-out.component';
import { WritersComponent } from './components/writers/writers.component';


const routes: Routes = [
  
  {
    path: "", component:LogInComponent  , pathMatch: 'full'
  },
  {
    path: "logIn", component: LogInComponent , pathMatch: 'full'
  },
  {
    path: "homePage", component: HomePageComponent , pathMatch: 'full'
  },
  {
    path: "logOut", component: LogOutComponent , pathMatch: 'full'
  },
  {
    path: "actors", component: ActorsComponent, pathMatch: 'full'
  },
  {
    path: "actors/:id", component: ActorsComponent, pathMatch: 'full'
  },
  {
    path: "drawers", component:DrawersComponent, pathMatch: 'full'
  },
  {
    path: "drawers/:id", component: DrawersComponent, pathMatch: 'full'
  },
  {
    path: "writers", component: WritersComponent, pathMatch: 'full'
  },
  {
    path: "writers/:id", component: WritersComponent, pathMatch: 'full'
  },
  {
    path: "about", component: AboutUsComponent, pathMatch: 'full'
  },  
];


@NgModule({

  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]

})

export class AppRoutingModule { }

