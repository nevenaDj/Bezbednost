import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ToastModule, ToastOptions} from 'ng2-toastr/ng2-toastr';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';

import { NgDatepickerModule } from 'ng2-datepicker';
import { AngularDateTimePickerModule } from 'angular2-datetimepicker';
import {MatDatepickerModule} from '@angular/material/datepicker';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';


import { LogsService } from './logs/logs.service';
import { AlarmsService } from './alarms/alarms.service';
import { AuthService } from './login/auth.service';
import { TokenInterceptorService } from './token-interceptor.service';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { EqualValidator } from './change-password/equal-validator.directive';
import { AlarmsComponent } from './alarms/alarms.component';
import { AlarmDetailsComponent } from './alarm-details/alarm-details.component';
import { AlarmsControlComponent } from './alarms-control/alarms-control.component';
import { LogsComponent } from './logs/logs.component';
import { NewAlarmComponent } from './new-alarm/new-alarm.component';
import { UserHomeComponent } from './user-home/user-home.component';
import { ReportsComponent } from './reports/reports.component';

export class CustomOption extends ToastOptions {
  animate = 'flyRight'; // you can override any options available
  newestOnTop = false;
  showCloseButton = true;
}


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    ChangePasswordComponent,
    EqualValidator,
    AlarmsComponent,
    AlarmDetailsComponent,
    AlarmsControlComponent,
    LogsComponent,
    NewAlarmComponent,
    UserHomeComponent,
    ReportsComponent
  ],
  exports: [
    MatDatepickerModule
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    InfiniteScrollModule,
    NoopAnimationsModule,
    MatDatepickerModule,
    ToastModule.forRoot(),
  ],
  providers: [
    AuthService,
    AlarmsService,
    LogsService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true
    }
   
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
