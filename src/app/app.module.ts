import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MyApp } from './app.component';
import { HomePagePage } from '../pages/home-page/home-page';
import { SchoolAnnouncementsPage } from '../pages/school-announcements/school-announcements';
import { SchoolCalendarPage } from '../pages/school-calendar/school-calendar';
import { StudentTimetablePage } from '../pages/student-timetable/student-timetable';
import { TeachersPage } from '../pages/teachers/teachers';
import { AboutPage } from '../pages/about/about';
import { TabsControllerPage } from '../pages/tabs-controller/tabs-controller';
import { LoginPage } from '../pages/login/login';


import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatInputModule,
  MatPaginatorModule,
  MatProgressSpinnerModule,
  MatSortModule,
  MatTableModule,
  MatIconModule,
  MatButtonModule,
  MatCardModule,
  MatFormFieldModule } from "@angular/material";
import { RouteReuseStrategy } from '@angular/router';
import { ParallaxHeader } from './components/parallax-header/parallax-header.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PlatformModule } from '@angular/cdk/platform';


@NgModule({
  declarations: [
    MyApp,

    // Components
    ParallaxHeader,
    
    // Pages
    HomePagePage,
    SchoolAnnouncementsPage,
    SchoolCalendarPage,
    StudentTimetablePage,
    TeachersPage,
    AboutPage,
    TabsControllerPage,
    LoginPage
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatPaginatorModule,
    MatProgressSpinnerModule,
    MatSortModule,
    MatTableModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule
  ],
  bootstrap: [MyApp],
  entryComponents: [
    MyApp,
    HomePagePage,
    SchoolAnnouncementsPage,
    SchoolCalendarPage,
    StudentTimetablePage,
    TeachersPage,
    AboutPage,
    TabsControllerPage,
    LoginPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
  ],
})
export class AppModule {}