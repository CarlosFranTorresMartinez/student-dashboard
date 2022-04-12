import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Observable} from "rxjs";
import {Student} from "../model/Student";

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  url = environment.api;

  constructor(private htpp: HttpClient) {
  }

  getStudent(): Observable<Student[]> {
    return this.htpp.get<Array<Student>>(`${this.url}/student`);
  }


  saveStudent(student: Student): Observable<Student> {
    return this.htpp.post<Student>(`${this.url}/student/save`, student);
  }

  changeStatus(e: string): Observable<Student> {
    const params: HttpParams = new HttpParams().set('id', e);
    return this.htpp.put<Student>(`${this.url}/student`, {}, {params});
  }

  getStundetNotAssing(): Observable<Student[]> {
    return this.htpp.get<Array<Student>>(`${this.url}/student/studentNotAssing`);
  }

}
