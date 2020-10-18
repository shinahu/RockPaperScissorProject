import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RockService } from 'src/app/rock.service';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {

  constructor(public rockService: RockService, private router: Router) { }



  ngOnInit(): void {
    // this.rockService.selection
    
  }

}
