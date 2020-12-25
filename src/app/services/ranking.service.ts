import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Ranking } from '../modules/ranking/ranking.model';

@Injectable({
  providedIn: 'root'
})
export class RankingService {

  constructor(private http: HttpClient) { }

  getEntries(stage: number, name: string) : Promise<Ranking> {
    return this.http.post<Ranking>('/api/ranking', {stageNumber: stage, rallyName: name}).toPromise();
  }
}
