import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeaderComponent } from './modules/header/header.component';
import { HomeComponent } from './modules/home/home.component';
import { RankingComponent } from './modules/ranking/ranking.component';
import { RulesComponent } from './modules/rules/rules.component';

const routes: Routes = [
  {path: 'leaderboard', component: RankingComponent},
  {path: 'home', component: HomeComponent},
  {path: 'rules', component: RulesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
