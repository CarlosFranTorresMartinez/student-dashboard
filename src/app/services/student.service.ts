import {Injectable} from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import {Student} from "../model/Student";


@Injectable({
  providedIn: 'root'
})
export class StudentService {

  private uri = environment.apiGAS;

  constructor(private http: HttpClient) {
  }

  getStudent(): Observable<Student[]> {
    const params = new HttpParams()
      .set('action', 'list');

    return this.http.get<Array<Student>>(`${this.uri}`, {params});
  }

  saveStudent(student: Student) {
    const params = new HttpParams()
      .set('action', 'save')
      .set('id_student', student.ID_STUDENT)
      .set('name', student.NAME)
      .set('father_lastname', student.FATHER_LASTNAME)
      .set('mother_lastname', student.MOTHER_LASTNAME)
      .set('dni', student.DNI)
      .set('email', student.EMAIL);

    return this.http.get(`${this.uri}`, {params});
  }
}
