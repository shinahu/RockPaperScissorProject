import { Component, OnInit } from '@angular/core';
import { NgSelectOption } from '@angular/forms';
import { RockService } from 'src/app/rock.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-choice',
  templateUrl: './rounds.component.html',
  styleUrls: ['./rounds.component.css']
})
export class RoundsComponent implements OnInit {

  constructor(public rockService: RockService, public router: Router) { }

  userScore = 0;
  compScore = 0;
  userName: string;
  userSelected: string;
  compSelected: string;
  action: string;
  status: string;
  compWeapons = [
    'Rock',
    'Paper',
    'Scissors'
  ];

  
  ngOnInit(): void { 

    this.rockService.userselectionArray = [];
    this.rockService.gameresultArray = [];
    
  }

  roundsPick(userRound: 1 | 3 | 5 ){
    /*let userName = this.rockService.userName;*/
    this.rockService.roundsSelect = userRound;
    this.router.navigateByUrl("/choice");
  }

  }
