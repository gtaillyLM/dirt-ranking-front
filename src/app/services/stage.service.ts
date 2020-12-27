import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RallyStage } from '../modules/ranking/ranking.model';

@Injectable({
  providedIn: 'root'
})
export class StageService {

  constructor(private http: HttpClient) { }

  getRallyStage() : Observable<RallyStage[]> {
    return this.http.get<RallyStage[]>('/api/v1/stage');
  }
}
