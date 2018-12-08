import { Injectable } from '@angular/core';
import { ServerLog } from './server-log';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

const API = environment.logUrl;

@Injectable({
  providedIn: 'root'
})
export class ServerLogService {

  constructor(private http: HttpClient) { }

  log(log: ServerLog){
    return this.http.post(API + '/infra/log', log);
  }
}
