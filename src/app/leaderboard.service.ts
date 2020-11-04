import {​​ Injectable }​​ from '@angular/core';

import {​​ HttpClient, HttpHeaders }​​ from '@angular/common/http';

import {​​ Router }​​ from '@angular/router';

import {​​Leaderboard, LeaderboardEnvelope, LeaderboardsEnvelope }​​ from './models/leaderboard';



@Injectable({​​

  providedIn: 'root'

}​​)

export class LeaderboardService {​​



  public Leaderboard?: LeaderboardsEnvelope;



  constructor(private router: Router, public httpClient: HttpClient) {​​ }​​



  GetSomeLeaderBoardShit() {​​

    let request = this.httpClient.get<LeaderboardsEnvelope>("https://my-json-server.typicode.com/kmalikkhil/json/Leaderboard");

    request.subscribe((response) => {​​

      console.log(response);

      this.Leaderboard = response;

    }​​);



  }​​

}​​