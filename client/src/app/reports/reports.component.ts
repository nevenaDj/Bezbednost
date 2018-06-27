import { Component, OnInit } from '@angular/core';
import { LogsService } from '../logs/logs.service';
import { AuthService } from '../login/auth.service';
import { LogInterface } from '../model/log';
import { FormGroup, FormControl } from '@angular/forms';
import { AlarmsService } from '../alarms/alarms.service';
import { ReportInterface } from '../model/report';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.css']
})
export class ReportsComponent implements OnInit {

  logs: LogInterface[]=[];
  page: number=0;

  search_text:string="";
  search_mod:boolean=false;
  date = new Date();
  date2:Date= new Date();
  alarmNum=0;
  logNum=0;
  alarmed:ReportInterface[]=[];
  loged:ReportInterface[]=[];

  constructor(private logsService: LogsService, private auth: AuthService,private alarmService:AlarmsService
  ) { 
  }

  

  ngOnInit() {
    this.getLogs()
  }

  logout(){
    this.auth.logout();
  }

  onScroll () {
    if (!this.search_mod){
      this.page=this.page+1
      this.getLogs()
    }
  }

  private getLogs() {
    this.logsService.getLogs(this.page).then(
      logs=>{
        for (let log of logs) {
          this.logs.push(log)
        }
      }
    )
  }

  onKeydown(event) {
      if (this.search_text==""){
        this.page=0
        this.search_mod=false;
        this.logs=[]
        this.getLogs()
      } else{
        this.page=0
        console.log(this.search_text);
        this.search_mod=true;
        this.logsService.search(this.search_text).then(
          res=> this.logs=res
        )
      }

  }

  search(){
    console.log('date: ', this.date, new Date(this.date))
    console.log('date2: ', this.date2)
    this.logsService.getCount(new Date(this.date), new Date(this.date2)).then(res=>this.logNum=res);
    this.logsService.getCountHostname(new Date(this.date), new Date(this.date2)).then(res=>{this.loged=res; console.log(res)});
    this.alarmService.getCount(new Date(this.date), new Date(this.date2)).then(res=>this.alarmNum=res);
    this.alarmService.getCountHostname(new Date(this.date), new Date(this.date2)).then(res=>this.alarmed=res);
  }

}
