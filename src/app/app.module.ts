import { BrowserModule } from '@angular/platform-browser';
import {​​​​ FormsModule }​​​​ from '@angular/forms';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChoiceComponent } from './routes/choice/choice.component';
import { ResultsComponent } from './routes/results/results.component';
import { ScoreboardComponent } from './routes/Scoreboard/scoreboard/scoreboard.component';
import { UsernameComponent } from './username/username.component';

@NgModule({
  declarations: [
    AppComponent,
    ChoiceComponent,
    ResultsComponent,
    ScoreboardComponent,
    UsernameComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
