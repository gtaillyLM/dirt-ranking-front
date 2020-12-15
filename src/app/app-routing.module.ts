import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeaderComponent } from './modules/header/header.component';
import { HomeComponent } from './modules/home/home.component';
import { RankingComponent } from './modules/ranking/ranking.component';

const routes: Routes = [
  {path: 'leaderboard', component: RankingComponent},
  {path: 'home', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
