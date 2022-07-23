import {Injectable} from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Tutor} from "../interface/Tutor";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class TutorService {

  api = environment.apiUrl;

  constructor(private httpClient: HttpClient) {
  }

  createMonitor(monitor: Tutor) {
    return this.httpClient.post(this.api + '/tutor/create', monitor);
  }

  validateMonitor(email: string | undefined): Observable<Tutor> {
    return this.httpClient.get(this.api + '/tutor/email/' + email);
  }
}

