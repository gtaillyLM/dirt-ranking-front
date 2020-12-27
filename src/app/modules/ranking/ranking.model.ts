export interface Ranking {
    stageNumber: number;
    rallyName: string;
    entries: Entries[];
}

export interface Entries {
    stageRank: number,
    overallRank: number,
    stageRankClass: number,
    overallRankClass: number,
    driver: string,
    car: string,
    category: string,
    stageTime: number,
    stageDiff: number,
    stageDiffClass: number,
    totalTime: number,
    totalDiff: number,
    totalDiffClass: number
}

export interface RallyStage {
    name: string,
    stage: Stage[]
}

export interface Stage {
    _id: number,
    name: string
}