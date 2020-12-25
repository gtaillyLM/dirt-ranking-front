import { Component, OnInit } from '@angular/core';
import { RankingService } from 'src/app/services/ranking.service';
import { StageService } from 'src/app/services/stage.service';
import { RallyStage, Ranking } from './ranking.model';

@Component({
  selector: 'app-ranking',
  templateUrl: './ranking.component.html',
  styleUrls: ['./ranking.component.scss']
})
export class RankingComponent implements OnInit {

  public ranking: Ranking;
  public rallyStage: RallyStage;
  public selectedRally;
  public selectedStage;

  constructor(private rankingService: RankingService, 
    private stageService: StageService) { 
  }

  async ngOnInit() {
    this.ranking = await this.rankingService.getEntries(1, 'CATAMARCA PROVINCE');
    this.rallyStage = await this.stageService.getRallyStage('CATAMARCA PROVINCE');

    console.log(this.rallyStage[0]);
  }

}
