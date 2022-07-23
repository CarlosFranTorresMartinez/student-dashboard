import {Injectable} from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Assign} from "../interface/Assign";
import {Observable} from "rxjs";
import {Semester} from "../interface/Semester";

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

  getSemester(email: string | undefined): Observable<Semester[]> {
    return this.httpClient.get<Array<Semester>>(this.api + '/assign/semester/' + email);
  }

}
