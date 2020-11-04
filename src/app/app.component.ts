import { Component } from '@angular/core';
import { LeaderboardService } from './leaderboard.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  username:string;
  constructor(public leaderboardservice: LeaderboardService){}
  LoadReport(){
    
    this.leaderboardservice.GetSomeLeaderBoardShit()
  }

}
