import { Component, OnInit } from '@angular/core';
import { RankingService } from 'src/app/services/ranking.service';
import { StageService } from 'src/app/services/stage.service';
import { Entries, RallyStage, Ranking, Stage } from './ranking.model';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-ranking',
  templateUrl: './ranking.component.html',
  styleUrls: ['./ranking.component.scss']
})
export class RankingComponent implements OnInit {

  public ranking: Ranking;
  public stageEntries: Entries[];
  public overallEntries: Entries[];
  public rallyStage: RallyStage[];
  public rallyInProgress: RallyStage;
  public stageRallyInProgress: Stage[];
  public selectedRally;
  public selectedStage;

  constructor(private rankingService: RankingService, 
    private stageService: StageService) { 
  }

  ngOnInit() {
    
    this.stageService.getRallyStage().subscribe(stages => {

      this.rankingService.getEntries(1, stages[stages.length - 1].name)
      .pipe(map(data => this.sortEntriesByStageRank(data)))
      .subscribe(entriesOrderByStage => {    

        this.rankingService.getEntries(1, stages[stages.length - 1].name)
        .pipe(map(data => this.sortEntriesByOverallRank(data)))
        .subscribe(entriesOrderByOverall => {

          this.stageEntries = entriesOrderByStage;
          this.overallEntries = entriesOrderByOverall;
          this.rallyStage = stages;
          this.selectedRally = this.rallyStage[stages.length - 1].name;
          this.stageRallyInProgress = this.findStagesByRally(this.selectedRally);
          this.selectedStage = this.getStageRallyInProgressByNumber(1).name; 
        })
      });
    });    
  }

  changeRally(data){
    this.stageRallyInProgress = this.findStagesByRally(data.target.value);
    this.selectedStage = this.getStageRallyInProgressByNumber(1).name;

    this.rankingService.getEntries(1, data.target.value)
    .pipe(map(data => this.sortEntriesByStageRank(data)))
    .subscribe(entriesOrderByStage => {
      this.stageEntries = entriesOrderByStage;
    })

    this.rankingService.getEntries(1, data.target.value)
    .pipe(map(data => this.sortEntriesByOverallRank(data)))
    .subscribe(entriesOrderByOverall => {
      this.overallEntries = entriesOrderByOverall;
    })
  }

  changeStage(data){
    console.log(data.target.value);
    var stageInProgress = this.getStageRallyInProgressByName(data.target.value);
    this.selectedStage = stageInProgress.name;

    this.rankingService.getEntries(+stageInProgress._id + +1, this.selectedRally)
    .pipe(map(data => this.sortEntriesByStageRank(data)))
    .subscribe(entriesOrderByStage => {
      this.stageEntries = entriesOrderByStage;
    })

    this.rankingService.getEntries(+stageInProgress._id + +1, this.selectedRally)
    .pipe(map(data => this.sortEntriesByOverallRank(data)))
    .subscribe(entriesOrderByOverall => {
      this.overallEntries = entriesOrderByOverall;
    })
  }

  private findStagesByRally(rallyName: string): Stage[] {
    return this.rallyStage.find(({name}) => name === rallyName).stage;
  }

  private getStageRallyInProgressByNumber(stageNumber: number): Stage {
    return this.stageRallyInProgress[stageNumber - 1];
  }

  private getStageRallyInProgressByName(stageName: string): Stage {
    return this.stageRallyInProgress.find(({name}) => name === stageName);
  
  }

  private sortEntriesByOverallRank(ranking: Ranking): Entries[] {
    return ranking[0].entries.sort((a,b) => a.overallRank - b.overallRank)
  }

  private sortEntriesByStageRank(ranking: Ranking): Entries[] {
    return ranking[0].entries.sort((a,b) => a.stageRank - b.stageRank)
  }

}
