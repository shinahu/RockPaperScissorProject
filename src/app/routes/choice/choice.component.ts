import { Component, OnInit } from '@angular/core';
import { NgSelectOption } from '@angular/forms';
import { RockService } from 'src/app/rock.service';

@Component({
  selector: 'app-choice',
  templateUrl: './choice.component.html',
  styleUrls: ['./choice.component.css']
})
export class ChoiceComponent implements OnInit {

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

  userPick(userWeapo: 'Rock' | 'Paper'| 'Scissors'){
    let userName = this.rockService.userName;
    this.rockService.commitSelection(userWeapo, userName);
  }

  }
