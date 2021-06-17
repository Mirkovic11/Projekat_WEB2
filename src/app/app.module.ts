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
    NgbModule
  ],
  providers: [ 
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
