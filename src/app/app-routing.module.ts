import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChoiceComponent } from './routes/choice/choice.component';
import { ResultsComponent } from './routes/results/results.component';
import { ScoreboardComponent } from './routes/Scoreboard/scoreboard/scoreboard.component';
import { RoundsComponent } from './routes/rounds/rounds.component';
const routes: Routes = [
  { path: "choice", component:ChoiceComponent},
  { path: "results", component:ResultsComponent},
  { path: "Scoreboard", component:ScoreboardComponent},
  { path: "rounds", component:RoundsComponent},

  { path: "**", redirectTo: "rounds"}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
