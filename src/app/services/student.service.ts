import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
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

}
