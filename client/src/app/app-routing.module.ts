import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { LogsComponent } from './logs/logs.component';
import { AlarmsComponent } from './alarms/alarms.component';
import { AlarmsControlComponent } from './alarms-control/alarms-control.component';
import { NewAlarmComponent } from './new-alarm/new-alarm.component';
import { AlarmDetailsComponent } from './alarm-details/alarm-details.component';

const routes: Routes = [
  { 
    path: 'logs', component: LogsComponent
  },
  { 
    path: 'alarms', component: AlarmsComponent
  },
  { 
    path: 'alarms/control', component: AlarmsControlComponent
  },
  { 
    path: 'alarms/new', component: NewAlarmComponent
  },
  { 
    path: 'alarms/:id', component: AlarmDetailsComponent
  },
  { 
    path: 'home', 
    component: HomeComponent
  },
  {
    path: 'password',
    component: ChangePasswordComponent
  }, 
  {
    path: 'login',
    component: LoginComponent
  },
  { path: '**', redirectTo: 'login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
