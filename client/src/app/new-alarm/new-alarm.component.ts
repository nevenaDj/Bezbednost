import { Component, OnInit } from '@angular/core';
import { AlarmInterface } from '../model/alarm';
import { AlarmsService } from '../alarms/alarms.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../login/auth.service';

@Component({
  selector: 'app-new-alarm',
  templateUrl: './new-alarm.component.html',
  styleUrls: ['./new-alarm.component.css']
})
export class NewAlarmComponent implements OnInit {

  type="hostname";
  dateStart:Date;
  dateEnd:Date;

  newAlarm: AlarmInterface;
  constructor(private alarmService: AlarmsService, private auth: AuthService, private router: Router) { 
    this.newAlarm={
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

  back(){
    this.router.navigate(['/alarms']);
  }

  logout(){
    this.auth.logout();
  }

  ngOnInit() {
  }

  newAlarmClick(){
    if (this.newAlarm.name==''){
      console.log("name");
    } else if(this.newAlarm.description==''){
      console.log("desc");
    } else if(this.newAlarm.number<1){
      console.log("num");
    } else if(this.newAlarm.seconds<1){
      console.log("sec");
    }else{
      this.dateStart=new Date();
      if (this.type=="hostname")
        this.newAlarm.hostname="!hostname!"
      console.log("newAlarmClick");
      console.log(this.newAlarm);
      this.alarmService.createAlarm(this.newAlarm).then(
          res=>{this.router.navigate(['/alarms','control'])
          this.dateEnd= new Date();
          console.log('date1: ', this.dateStart.getMilliseconds()- this.dateEnd.getMilliseconds());}
      ).catch(err=>this.router.navigate(['/alarms','control']))
    }
  }

}
