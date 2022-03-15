import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient, HttpParams} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Assing} from "../model/Assing";
import {AssingBuilder} from "../model/AssingBuilder";

@Injectable({
  providedIn: 'root'
})
export class AssingService {
  private uri = environment.apiGAS;

  constructor(private http: HttpClient) {
  }

  getAssing(): Observable<Assing[]> {
    const params = new HttpParams()
      .set('action', 'listAssing');

    return this.http.get<Array<Assing>>(`${this.uri}`, {params});
  }

  saveAssing(assing: AssingBuilder) {
    const params = new HttpParams()
      .set('action', 'saveAssing')
      .set('id_assingment', assing.ID_ASSIGMENT)
      .set('tutor', assing.TUTOR)
      .set('id_student', assing.STUDENT)
      .set('career', assing.CAREER)
      .set('semestre', assing.SEMESTRE)
      .set('status', assing.STATUS);

    return this.http.get(`${this.uri}`, {params});
  }
}
