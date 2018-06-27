import { Injectable } from '@angular/core';
import { LogInterface } from '../model/log';

import { HttpClient, HttpParams } from '@angular/common/http';
import { Subject } from 'rxjs/Rx';
import { ReportInterface } from '../model/report';

@Injectable()
export class LogsService {

  private url = '/api/logs';
  
  private RegenerateData = new Subject<void>();

  RegenerateData$ = this.RegenerateData.asObservable();

  constructor(private http: HttpClient) { 
  }

  announceChange(){
    this.RegenerateData.next();
  }

  getLogs(page:number, size = 20):Promise<LogInterface[]> {
    const httpParams = new HttpParams().set('page', page.toString()).set('size', size.toString()).set('sort', 'id,desc');
    return this.http
    .get<LogInterface[]>(this.url, {params: httpParams})
    .toPromise()
    .then(res => res)
    .catch(this.handleError);
  }

  search(text:String):Promise<LogInterface[]>{
    return this.http
    .post<LogInterface[]>(this.url, text)
    .toPromise()
    .then(res => res)
    .catch(this.handleError);
  }

  getCount(start:Date, end:Date):Promise<any>{
    this.url='/api/logs/count';
    let time= {'start':start, 'end':end};
    return this.http
    .post<any>(this.url, time)
    .toPromise()
    .then(res => res)
    .catch(this.handleError);
  }


  getCountHostname(start:Date, end:Date):Promise<ReportInterface[]>{
    this.url='/api/logs/count/host';
    let time= {'start':start, 'end':end};
    return this.http
    .post<ReportInterface[]>(this.url, time)
    .toPromise()
    .then(res => res)
    .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error("Error... ", error);
    return Promise.reject(error.message || error);
  }
}
