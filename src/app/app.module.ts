import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './login/login.component';
import { UserComponent } from './user/user.component';
import { TimeLineComponent } from './time-line/time-line.component';
import { MapsComponent } from './maps/maps.component';
import { NextRunComponent } from './next-run/next-run.component';
import { RunsComponent } from './runs/runs.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    LoginComponent,
    UserComponent,
    TimeLineComponent,
    MapsComponent,
    NextRunComponent,
    RunsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
