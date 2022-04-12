import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Observable} from "rxjs";
import {Monitor} from "../model/Monitor";

@Injectable({
  providedIn: 'root'
})
export class MonitorService {

  url = environment.api;

  constructor(private htpp: HttpClient) {
  }

  getMonitor(career: string): Observable<Monitor[]> {
    const params: HttpParams = new HttpParams().set('career', career);
    return this.htpp.get<Array<Monitor>>(`${this.url}/monitor`, {params});
  }

}
