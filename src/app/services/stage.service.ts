import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RallyStage } from '../modules/ranking/ranking.model';

@Injectable({
  providedIn: 'root'
})
export class StageService {

  constructor(private http: HttpClient) { }

  getRallyStage(name: string) : Promise<RallyStage> {
    return this.http.post<RallyStage>('/api/stage', {rallyName: name}).toPromise();
  }
}
