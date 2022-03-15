import {Injectable} from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import {Career} from "../model/Career";
import {Student} from "../model/Student";

@Injectable({
  providedIn: 'root'
})
export class CareerService {

  private uri = environment.apiGAS;

  constructor(private http: HttpClient) {
  }

  getCareer(): Observable<Career[]> {
    const params = new HttpParams()
      .set('action', 'listCareer');

    return this.http.get<Array<Career>>(`${this.uri}`, {params});
  }
}
