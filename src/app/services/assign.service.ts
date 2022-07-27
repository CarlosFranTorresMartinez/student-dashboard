import {Injectable} from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient, HttpParams} from "@angular/common/http";
import {Assign} from "../interface/Assign";
import {Observable} from "rxjs";
import {Semester} from "../interface/Semester";
import {SemesterAcademy} from "../interface/SemesterAcademy";

@Injectable({
  providedIn: 'root'
})
export class AssignService {

  api = environment.apiUrl;

  constructor(private httpClient: HttpClient) {
  }

  createAssing(assing: Assign) {
    return this.httpClient.post(this.api + '/assign/create', assing);
  }

  getSemester(email: string | undefined, semesterAcademy: string | undefined): Observable<Semester[]> {
    const httpParams: HttpParams = new HttpParams()
      .set('email', String(email))
      .set('semesterAcademy', String(semesterAcademy));

    return this.httpClient.get<Array<Semester>>(this.api + '/assign/semester', {
      params: httpParams
    });
  }

  getSemesterAcademy(career: string | undefined): Observable<SemesterAcademy> {
    const httpParams: HttpParams = new HttpParams()
      .set('career', String(career));

    return this.httpClient.get<SemesterAcademy>(this.api + '/assign/semester-academy', {
      params: httpParams
    });
  }

  getSemesterAcademyByEmailOfTutor(email: string | undefined): Observable<SemesterAcademy[]> {
    return this.httpClient.get<SemesterAcademy[]>(this.api + '/assign/semester-academy/' + email);
  }

}
