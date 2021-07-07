import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CallComponent } from './dashboard/call/call.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { IncidentsComponent } from './dashboard/incidents/incidents.component';
import { MainComponent } from './dashboard/main/main.component';
import { MapComponent } from './dashboard/map/map.component';
import { MyincidentsComponent } from './dashboard/myincidents/myincidents.component';
import { MysafetydocsComponent } from './dashboard/mysafetydocs/mysafetydocs.component';
import { AddNewDeviceComponent } from './dashboard/newdevice/addnewdevice/add-new-device/add-new-device.component';
import { NewDeviceComponent } from './dashboard/newdevice/new-device/new-device.component';
import { BasicinfoComponent } from './dashboard/newincident/basicinfo/basicinfo.component';
import { CallsComponent } from './dashboard/newincident/calls/calls.component';
import { CrewComponent } from './dashboard/newincident/crew/crew.component';
import { DevicesComponent } from './dashboard/newincident/devices/devices.component';
import { NewincidentComponent } from './dashboard/newincident/newincident.component';
import { ResolutionComponent } from './dashboard/newincident/resolution/resolution.component';
import { BasicinfodocComponent } from './dashboard/newsafetydoc/basicinfodoc/basicinfodoc.component';
import { ChecklistComponent } from './dashboard/newsafetydoc/checklist/checklist.component';
import { EquipmentdocComponent } from './dashboard/newsafetydoc/equipment/equipmentdoc/equipmentdoc.component';
import { NewsafetydocComponent } from './dashboard/newsafetydoc/newsafetydoc.component';
import { NotificationsComponent } from './dashboard/notifications/notifications.component';
import { ProfileRegisteredUsersComponent } from './dashboard/profile-registered-users/profile-registered-users.component';
import { ProfileComponent } from './dashboard/profile/profile.component';
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
      {path: 'map', component: MapComponent},
      {path: 'profile', component: ProfileComponent,
        children: 
        [
         {path: 'registeredUsers', component: ProfileRegisteredUsersComponent},
        ]},
      {path: 'mysafetydocs', component: MysafetydocsComponent},
      {path: 'mysafetydocs/newSafetyDoc', component : NewsafetydocComponent,
    
        children: [
          {path: 'basicInfo', component: BasicinfodocComponent},
          {path: 'checkList', component: ChecklistComponent},
          {path: 'equipment', component: EquipmentdocComponent},
        ]
    },
     
     
      {path: 'incidents', component: IncidentsComponent},
      {path: 'incidents/newincident', component: NewincidentComponent,
        children: [
          {path: 'basicInfo', component: BasicinfoComponent},
          {path: 'calls', component: CallsComponent },
          {path: 'crew', component: CrewComponent},
          {path: 'devices', component: DevicesComponent},
          {path: 'resolution', component:ResolutionComponent}
        ]
      },

      {path: 'call', component: CallComponent},
      {path: 'proba', component: MyincidentsComponent},
      {path: 'devices', component: NewDeviceComponent},
      {path: 'devices/newDevice', component: AddNewDeviceComponent}
     
      //{path: 'registeredUsers', component: ProfileRegisteredUsersComponent},
     
    ]},

   
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
