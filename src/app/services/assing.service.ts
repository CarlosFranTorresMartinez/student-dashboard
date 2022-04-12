import {Injectable} from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Assing} from "../model/assing/Assing";
import {AssingPost} from "../model/assing/AssingPost";
import {MonitorAssing} from "../model/assing/MonitorAssing";

@Injectable({
  providedIn: 'root'
})
export class AssingService {

  url = environment.api;

  constructor(private htpp: HttpClient) {
  }

  getAssing(): Observable<Assing[]> {
    return this.htpp.get<Array<Assing>>(`${this.url}/assing`);
  }

  getMonitoAssing(): Observable<MonitorAssing[]> {
    return this.htpp.get<Array<MonitorAssing>>(`${this.url}/assing/monitor`);
  }

  saveAssing(assing: AssingPost): Observable<AssingPost> {
    return this.htpp.post<AssingPost>(`${this.url}/assing/save`, assing);
  }
}
