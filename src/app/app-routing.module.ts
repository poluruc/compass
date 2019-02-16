import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePagePage } from '../pages/home-page/home-page';
import { SchoolAnnouncementsPage } from '../pages/school-announcements/school-announcements';
import { SchoolCalendarPage } from '../pages/school-calendar/school-calendar';
import { AboutPage } from '../pages/about/about';
import { TeachersPage } from '../pages/teachers/teachers';
import { StudentTimetablePage } from '../pages/student-timetable/student-timetable';
import { LoginPage } from '../pages/login/login';

const routes: Routes = [
  { path: 'home', component: HomePagePage },
  { path: 'announcements', component: SchoolAnnouncementsPage },
  { path: 'notifications', component: SchoolAnnouncementsPage },
  { path: 'calendar', component: SchoolCalendarPage },
  { path: 'about', component: AboutPage },
  { path: 'teachers', component: TeachersPage },
  { path: 'timetable', component: StudentTimetablePage },
  { path: 'login', component: LoginPage },
  { path: 'app-menu', loadChildren: './pages/app-menu/app-menu.module#AppMenuPageModule' },
  ];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
