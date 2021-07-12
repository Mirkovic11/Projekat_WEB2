import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';

import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RegistrationComponent } from './registration/registration.component';
import { MatSelectModule } from '@angular/material/select';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MainComponent } from './dashboard/main/main.component';
import { NotificationsComponent } from './dashboard/notifications/notifications.component';
import { MatGridListModule } from '@angular/material/grid-list';

import { IgxPieChartModule } from 'igniteui-angular-charts';
import { IgxDoughnutChartModule } from 'igniteui-angular-charts';
import { IgxDataChartCoreModule } from 'igniteui-angular-charts';
import { IgxDataChartCategoryModule } from 'igniteui-angular-charts';
import { MyincidentsComponent } from './dashboard/myincidents/myincidents.component';

import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { MapComponent } from './dashboard/map/map.component';
import { ProfileComponent } from './dashboard/profile/profile.component';
import { CallComponent } from './dashboard/call/call.component';
import { UserService } from './services/user/user.service';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts';


import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ProfileRegisteredUsersComponent } from './dashboard/profile-registered-users/profile-registered-users.component';
import { MysafetydocsComponent } from './dashboard/mysafetydocs/mysafetydocs.component';

import { NewsafetydocComponent } from './dashboard/newsafetydoc/newsafetydoc.component';
import { BasicinfodocComponent } from './dashboard/newsafetydoc/basicinfodoc/basicinfodoc.component';
import { HistorydocComponent } from './dashboard/newsafetydoc/historydoc/historydoc.component';
import { ChecklistComponent } from './dashboard/newsafetydoc/checklist/checklist.component';
import { MultimediadocComponent } from './dashboard/newsafetydoc/multimediadoc/multimediadoc.component';

import { MatTabsModule } from '@angular/material/tabs';

import { IncidentsComponent } from './dashboard/incidents/incidents.component';
import { NewincidentComponent } from './dashboard/newincident/newincident.component';
import { BasicinfoComponent } from './dashboard/newincident/basicinfo/basicinfo.component';
import { DevicesComponent } from './dashboard/newincident/devices/devices.component';
import { CallsComponent } from './dashboard/newincident/calls/calls.component';
import { CrewComponent } from './dashboard/newincident/crew/crew.component';
import { EquipmentComponent } from './dashboard/newincident/equipment/equipment.component';
import { MultimediaComponent } from './dashboard/newincident/multimedia/multimedia.component';
import { ResolutionComponent } from './dashboard/newincident/resolution/resolution.component';


import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MaterialModule } from './material/material.module';
import { HttpClientModule } from '@angular/common/http';
import { MatTooltipModule } from '@angular/material/tooltip';
import { EquipmentdocComponent } from './dashboard/newsafetydoc/equipment/equipmentdoc/equipmentdoc.component';
import { DeviceModalComponent } from './dashboard/newsafetydoc/deviceModal/device-modal/device-modal.component';

import { ToastrModule } from 'ngx-toastr';
import { NewDeviceComponent } from './dashboard/newdevice/new-device/new-device.component';
import { AddNewDeviceComponent } from './dashboard/newdevice/addnewdevice/add-new-device/add-new-device.component';
import { ConsumerComponent } from './dashboard/consumer/consumer.component';
import { NewconsumerComponent } from './dashboard/newconsumer/newconsumer.component';
import { SettingsComponent } from './dashboard/settings/settings.component';
import { WorkplansComponent } from './dashboard/workplans/workplans.component';
import { NewWorkplanComponent } from './dashboard/new-workplan/new-workplan.component';
import { WorkplanBasicinfoComponent } from './dashboard/workplan-basicinfo/workplan-basicinfo.component';
import { WorkplanEquipmentComponent } from './dashboard/workplan-equipment/workplan-equipment.component';
import { WorkplanHistoryComponent } from './dashboard/workplan-history/workplan-history.component';
import { CallModalComponent } from './dashboard/call/modal/call-modal/call-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RegistrationComponent,
    DashboardComponent,
    MainComponent,
    NotificationsComponent,
    MyincidentsComponent,
    MapComponent,
    ProfileComponent,
    CallComponent,
    ProfileRegisteredUsersComponent,
    MysafetydocsComponent,
    NewsafetydocComponent,
    BasicinfodocComponent,
    HistorydocComponent,
    ChecklistComponent,
    MultimediadocComponent,
    IncidentsComponent,
    NewincidentComponent,
    BasicinfoComponent,
    DevicesComponent,
    CallsComponent,
    CrewComponent,
    EquipmentComponent,
    MultimediaComponent,
    ResolutionComponent,
    EquipmentdocComponent,
    DeviceModalComponent,
    NewDeviceComponent,
    AddNewDeviceComponent,
    ConsumerComponent,
    NewconsumerComponent,
    SettingsComponent,
    WorkplansComponent,
    NewWorkplanComponent,
    WorkplanBasicinfoComponent,
    WorkplanEquipmentComponent,
    WorkplanHistoryComponent,
    CallModalComponent
  

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatFormFieldModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatSelectModule,
    MatSidenavModule,
    MatToolbarModule, 
    MatListModule,
    MatGridListModule,
    IgxPieChartModule, 
    IgxDoughnutChartModule,
    IgxDataChartCoreModule,
    IgxDataChartCategoryModule,
    MatPaginatorModule,
    MatTableModule,
    FormsModule,
    ReactiveFormsModule,
    ChartsModule,
    NgbModule,
    MatTabsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MaterialModule,
    ToastrModule.forRoot(),

  ],
  exports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    MaterialModule,
    BrowserAnimationsModule,   
    MatTooltipModule,
    HttpClientModule,
    ChartsModule
  ],
  providers: [ 
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
