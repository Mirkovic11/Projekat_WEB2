import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MainComponent } from './dashboard/main/main.component';
import { MapComponent } from './dashboard/map/map.component';
import { MyincidentsComponent } from './dashboard/myincidents/myincidents.component';
import { NotificationsComponent } from './dashboard/notifications/notifications.component';
import { HomeComponent } from './home/home.component';
import { RegistrationComponent } from './registration/registration.component';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'registration', component: RegistrationComponent},
  {path: 'dashboard', component: DashboardComponent, 
    children: [
      {path: 'main', component: MainComponent},
      {path: 'notifications', component: NotificationsComponent},
      {path: 'myincidents', component: MyincidentsComponent},
      {path: 'map', component: MapComponent}
    ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
