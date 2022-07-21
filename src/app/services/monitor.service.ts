import {Injectable} from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Monitor} from "../interface/Monitor";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class MonitorService {

  api = environment.apiUrl;

  constructor(private httpClient: HttpClient) {
  }

  createMonitor(monitor: Monitor) {
    return this.httpClient.post(this.api + '/monitor/create', monitor);
  }

  getDataMonitorByEmail(email: string | undefined): Observable<Monitor> {
    return this.httpClient.get(this.api + '/monitor/email/' + email);
  }

  validateMonitor(email: string | undefined): Observable<Monitor> {
    return this.httpClient.get(this.api + '/monitor/' + email);
  }
}

