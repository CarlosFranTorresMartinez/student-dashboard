import {Injectable} from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient, HttpParams} from "@angular/common/http";
import {Student} from "../model/Student";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  uri = environment.api;

  constructor(private htpp: HttpClient) {
  }

  saveStudent(student: Student): Observable<Student> {
    return this.htpp.post<Student>(`${this.uri}/student/save`, student);
  }

  getStudent(): Observable<Student[]> {
    return this.htpp.get<Array<Student>>(`${this.uri}/student`);
  }

  updateStudent(e: Student): Observable<Student> {
    return this.htpp.put<Student>(`${this.uri}/student/update`, e);
  }

  changeStatus(e: string): Observable<Student> {
    const params: HttpParams = new HttpParams().set('id', e);
    return this.htpp.put<Student>(`${this.uri}/student/change-status`, {}, {params});
  }
}
