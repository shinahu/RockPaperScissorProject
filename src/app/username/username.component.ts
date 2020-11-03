import { Component, OnInit } from '@angular/core';
import { RockService } from 'src/app/rock.service';
import {​​​​ FormsModule }​​​​ from '@angular/forms';

@Component({
  selector: 'app-username',
  templateUrl: './username.component.html',
  styleUrls: ['./username.component.css']
})
export class UsernameComponent implements OnInit {

  
  constructor(public rockService: RockService) { }

  ngOnInit(): void {
    
  }

  SetUsername(userName){
    this.rockService.userName = userName;
  }
}

