import {Injectable} from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Career} from "../model/Career";

@Injectable({
  providedIn: 'root'
})
export class CareerService {

  url = environment.api;

  constructor(private htpp: HttpClient) {
  }

  getCareer(): Observable<Career[]> {
    return this.htpp.get<Array<Career>>(`${this.url}/career`);
  }

}
