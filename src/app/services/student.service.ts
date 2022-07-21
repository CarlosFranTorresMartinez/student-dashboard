import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Student} from "../interface/Student";
import {environment} from "../../environments/environment";
import {Observable} from "rxjs";

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

  listStudent(): Observable<Student[]> {
    return this.httpClient.get<Student[]>(this.api + '/student');
  }


  listStudentNotAssing(): Observable<Student[]> {
    return this.httpClient.get<Student[]>(this.api + '/student/assing');
  }
}

