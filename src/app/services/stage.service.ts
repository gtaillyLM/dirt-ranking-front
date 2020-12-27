import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RallyStage } from '../modules/ranking/ranking.model';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class StageService {

  baseUrl = environment.baseUrl;

  constructor(private http: HttpClient) { }

  getRallyStage() : Observable<RallyStage[]> {
    return this.http.get<RallyStage[]>(this.baseUrl + 'api/v1/stage');
  }
}
