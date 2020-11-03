import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RockService } from 'src/app/rock.service';

@Component({
  selector: 'app-scoreboard',
  templateUrl: './scoreboard.component.html',
  styleUrls: ['./scoreboard.component.css']
})
export class ScoreboardComponent implements OnInit {

  constructor(public rockService: RockService, private router: Router) { }

  ngOnInit(): void {
  }

}

