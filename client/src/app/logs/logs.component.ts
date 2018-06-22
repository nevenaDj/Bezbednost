import { Component, OnInit } from '@angular/core';
import 'rxjs/add/operator/do';

import { BehaviorSubject } from 'rxjs/BehaviorSubject'
import * as _ from 'lodash';
import { LogsService } from './logs.service';
import { LogInterface } from '../model/log';
import { AuthService } from '../login/auth.service';

@Component({
  selector: 'app-logs',
  templateUrl: './logs.component.html',
  styleUrls: ['./logs.component.css']
})
export class LogsComponent implements OnInit {

  logs: LogInterface[]=[];
  page: number=0;

  search_text:string="";
  search_mod:boolean=false;


  constructor(private logsService: LogsService, private auth: AuthService
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

}
