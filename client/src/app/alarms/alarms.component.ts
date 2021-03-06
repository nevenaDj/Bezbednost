import { Component, OnInit } from '@angular/core';
import { AlarmInterface } from '../model/alarm';
import { Router } from '@angular/router';
import { AlarmsService } from './alarms.service';
import { Dict } from '../model/dict';
import { Item } from '../model/item';
import { AuthService } from '../login/auth.service';

@Component({
  selector: 'app-alarms',
  templateUrl: './alarms.component.html',
  styleUrls: ['./alarms.component.css']
})
export class AlarmsComponent implements OnInit {

  alarms: AlarmInterface[];
  allAlarms: AlarmInterface[];
  alarmList: Dict;
  show:boolean=false;
  dateStert:Date;
  dateEnd:Date;

    constructor(private router: Router,
      private auth: AuthService,
    private alarmService: AlarmsService) { 
      this.alarms=[]
      this.allAlarms=[]
      this.alarmList={items:[]}
    }

  ngOnInit() {
    this.dateStert=new Date();
    this.getAlarms();
  }

  logout(){
    this.auth.logout();
  }

  getAlarms(){
    this.alarmService.getAlarms().then(
      res=>{this.alarms=res;
        for (let a of res){
          this.allAlarms.push(a)
        }
        for (let alar of this.alarms) {
          let item:Item={alarm:alar, show:true};
          this.alarmList.items.push(item);
          
        }
        this.dateEnd=new Date();
        console.log('date1: ', this.dateStert.getMilliseconds()- this.dateEnd.getMilliseconds());
        
      }
    )
  }


  showAlarm(id:number){
    console.log(id);
    let path='/#/alarms/'+id;
    this.router.navigate(['/alarms', id]);
  }


  showHide(){
    if (this.show) 
      this.show=false;
    else
      this.show=true;
  }

  remove(alarm:AlarmInterface){
    console.log('remove')
    for (var a = 0; a < this.alarms.length; a++){
      if (this.alarms[a].id==alarm.id)
        this.alarms.splice(a, 1);
    }
    for (let a of this.alarmList.items){
      if (a.alarm.id==alarm.id)
        a.show=false;
    }
  }

  add(alarm:AlarmInterface){
    console.log('add')
    for (let a of this.alarmList.items){
      if (a.alarm.id==alarm.id)
        a.show=true;
    }
    console.log('alarm: ',alarm.id)
    for (let a in this.allAlarms){
      console.log(this.allAlarms[a].id)
      if (this.allAlarms[a].id==alarm.id){
        console.log('before:',this.alarms)
        this.alarms.push(this.allAlarms[a])
        console.log('after:',this.alarms)
      }
    }
  }

}
