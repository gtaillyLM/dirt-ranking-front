import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Ranking } from '../modules/ranking/ranking.model';

@Injectable({
  providedIn: 'root'
})
export class RankingService {

  constructor(private http: HttpClient) { }

  getEntries(stage: number, name: string) : Observable<Ranking> {
    return this.http.post<Ranking>('/api/v1/ranking', {stageNumber: stage, rallyName: name});
  }
}
