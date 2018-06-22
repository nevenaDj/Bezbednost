import { Component, OnInit } from '@angular/core';
import { AlarmInterface } from '../model/alarm';
import { AlarmsService } from '../alarms/alarms.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../login/auth.service';

@Component({
  selector: 'app-alarm-details',
  templateUrl: './alarm-details.component.html',
  styleUrls: ['./alarm-details.component.css']
})
export class AlarmDetailsComponent implements OnInit {

  alarm: AlarmInterface;
  constructor(private alarmService: AlarmsService, private auth: AuthService,private route: ActivatedRoute, private router: Router) { 
    this.alarm={
      appname:'',
      description:'',
      hostname:'',
      id:0,
      logs:[],
      msg:'',
      msgid:'',
      name:'',
      prival: 0, 
      procid:'',
      sd:'',
      timestamp:'', 
      version:0,
      number:0,
      seconds:0,
      canDelete:true
    }

  }

  ngOnInit() {
    this.alarmService.getAlarm(+this.route.snapshot.params['id']).then(
      res=>this.alarm=res
    ).catch(err=>this.router.navigate(['alarms']))
  }

  logout(){
    this.auth.logout();
  }

  back(){
    this.router.navigate(['alarms'])
  }

}
