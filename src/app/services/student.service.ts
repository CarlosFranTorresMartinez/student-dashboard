import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {Student} from "../interface/Student";
import {environment} from "../../environments/environment";
import {Observable} from "rxjs";
import {StudentAssign} from "../interface/StudentAssign";

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  api = environment.apiUrl;

  constructor(private httpClient: HttpClient) {
  }

  createStudent(student: Student) {
    return this.httpClient.post(this.api + '/student/create', student);
  }

  listStudentAssing(email: string | undefined, semester: string): Observable<StudentAssign[]> {
    const paramsStudent: HttpParams = new HttpParams()
      .set('email', String(email))
      .set('semester', String(semester));
    return this.httpClient.get<StudentAssign[]>(this.api + '/student/assign', {
      params: paramsStudent
    });
  }


  listStudentNotAssing(career: string | undefined): Observable<Student[]> {
    const paramsStudent: HttpParams = new HttpParams()
      .set('career', String(career));

    return this.httpClient.get<Student[]>(this.api + '/student/assing', {
      params: paramsStudent
    });
  }
}

