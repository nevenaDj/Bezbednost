import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { AlarmInterface } from '../model/alarm';
import { ReportInterface } from '../model/report';

@Injectable()
export class AlarmsService {

  private url = '/api/alarms';

  headers: HttpHeaders = new HttpHeaders({'Content-Type':'application/json'});
  
  private RegenerateData = new Subject<void>();

  RegenerateData$ = this.RegenerateData.asObservable();

  constructor(private http: HttpClient) { 
  }

  announceChange(){
    this.RegenerateData.next();
  }

  getAlarms():Promise<AlarmInterface[]> {
    return this.http
    .get<AlarmInterface[]>(this.url, {'headers':this.headers} )
    .toPromise()
    .then(res => res)
    .catch(this.handleError);
  }

  getAlarm(id: number):Promise<AlarmInterface> {
    let url=this.url+'/'+id;
    return this.http
    .get<AlarmInterface>(url, {'headers':this.headers})
    .toPromise()
    .then(res => res)
    .catch(this.handleError);
  }

  deleteAlarm(id: number):Promise<AlarmInterface> {
    let url=this.url+'/'+id;
    return this.http
    .delete<AlarmInterface>(url, {'headers':this.headers})
    .toPromise()
    .then(res => res)
    .catch(this.handleError);
  }

  createAlarm(alarm: AlarmInterface):Promise<void> {
    let url=this.url;
    return this.http
    .post<void>(url, alarm, {'headers':this.headers})
    .toPromise()
    .then(res => res)
    .catch(this.handleError);
  }

  getCount(start:Date, end:Date):Promise<number>{
    let url='/api/alarms/count';
    let time= {'start':start, 'end':end};
    return this.http
    .put<number>(url, time)
    .toPromise()
    .then(res => res)
    .catch(this.handleError);
  }


  getCountHostname(start:Date, end:Date):Promise<ReportInterface[]>{
    let url='/api/alarms/count/host';
    let time= {'start':start, 'end':end};
    return this.http
    .put<ReportInterface[]>(url, time)
    .toPromise()
    .then(res => res)
    .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error("Error... ", error);
    return Promise.reject(error.message || error);
  }


}
