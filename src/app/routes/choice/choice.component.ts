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
  userSelected: string;
  compSelected: string;
  action: string;
  status: string;
  compWeapons = [
    'rock',
    'paper',
    'scissors'
  ];

  
  ngOnInit(): void {
    
  }

  userPick(userWeapo: 'rock' | 'paper'| 'scissors' ){
    this.rockService.commitSelection(userWeapo);
  }

  }
