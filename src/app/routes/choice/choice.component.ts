import { Component, OnInit } from '@angular/core';
import { NgSelectOption } from '@angular/forms';
import { RockService } from 'src/app/rock.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-choice',
  templateUrl: './choice.component.html',
  styleUrls: ['./choice.component.css']
})
export class ChoiceComponent implements OnInit {

  roundCounter = 1;
  maxRounds: number;

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
    this.maxRounds = this.rockService.roundsSelect;
    
  }

  userPick(userWeapo: 'Rock' | 'Paper'| 'Scissors'){
    /*let userName = this.rockService.userName;*/
    if(this.roundCounter !=this.maxRounds){
      this.rockService.adduserselectiontoArray(userWeapo,this.maxRounds,this.roundCounter)
      this.roundCounter++;
      console.log(this.maxRounds, this.roundCounter)
    } 
    else{
      this.rockService.adduserselectiontoArray(userWeapo,this.maxRounds,this.roundCounter)
      this.rockService.commitSelection(userWeapo);
      this.router.navigateByUrl("/results");
    }
    //this.rockService.commitSelection(userWeapo, userName);
  }

  }
