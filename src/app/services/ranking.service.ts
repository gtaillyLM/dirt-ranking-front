import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Ranking } from '../modules/ranking/ranking.model';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RankingService {

  baseUrl = environment.baseUrl;

  constructor(private http: HttpClient) { }

  getEntries(stage: number, name: string) : Observable<Ranking> {
    return this.http.post<Ranking>(this.baseUrl + 'api/v1/ranking', {stageNumber: stage, rallyName: name});
  }
}
