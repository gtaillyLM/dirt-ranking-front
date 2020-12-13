import { Component, OnInit } from '@angular/core';
import { RankingService } from 'src/app/services/ranking.service';
import { Ranking } from './ranking.model';

@Component({
  selector: 'app-ranking',
  templateUrl: './ranking.component.html',
  styleUrls: ['./ranking.component.scss']
})
export class RankingComponent implements OnInit {

  public ranking: Ranking;
  public stageNumber;

  constructor(private rankingService: RankingService) { 
  }

  async ngOnInit() {
    this.ranking = await this.rankingService.getData(1, 'TEST');
    console.log(this.ranking[0].entries)
  }

}
