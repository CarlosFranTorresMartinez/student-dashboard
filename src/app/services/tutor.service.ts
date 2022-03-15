import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Observable} from "rxjs";
import {Student} from "../model/Student";
import {Career} from "../model/Career";
import {Tutor} from "../model/Tutor";

@Injectable({
  providedIn: 'root'
})
export class TutorService {
  private uri = environment.apiGAS;

  constructor(private http: HttpClient) {
  }

  getTutor(career: string): Observable<Tutor[]> {
    const params = new HttpParams()
      .set('action', 'getTutorByCareer')
      .set('code', career);

    return this.http.get<Array<Tutor>>(`${this.uri}`, {params});
  }
}
