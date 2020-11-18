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

  constructor(private rockService: RockService) { }

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
    
  }

  roundsPick(userRound: 'One' | 'Three'| 'Five'){
    let userName = this.rockService.userName;
    this.rockService.commitRoundSelection(userRound, userName);
  }

  }
