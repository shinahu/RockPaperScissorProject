import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChoiceComponent } from './routes/choice/choice.component';
import { ResultsComponent } from './routes/results/results.component';

const routes: Routes = [
  { path: "choice", component:ChoiceComponent},
  { path: "results", component:ResultsComponent},

  { path: "**", redirectTo: "choice"}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
