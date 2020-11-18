import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LeaderboardService } from 'src/app/leaderboard.service';
import { RockService } from 'src/app/rock.service';



@Component({
 selector: 'app-scoreboard',
 templateUrl: './scoreboard.component.html',
 styleUrls: ['./scoreboard.component.css']
})


export class ScoreboardComponent implements OnInit {

 constructor(public scoreboard:LeaderboardService ) { 
   
    
  }

ngOnInit(): void {
 }

 

}


    
