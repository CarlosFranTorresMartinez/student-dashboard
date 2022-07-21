import {Injectable} from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Assing} from "../interface/Assing";

@Injectable({
  providedIn: 'root'
})
export class AssingService {

  api = environment.apiUrl;

  constructor(private httpClient: HttpClient) {
  }

  createAssing(assing: Assing) {
    return this.httpClient.post(this.api + '/assing/create', assing);
  }
}
