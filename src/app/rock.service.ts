import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { of } from 'rxjs';
import { delay } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class RockService {

  private _selection?: 'rock' | 'paper'| 'scissors';

  get selection() {
    return this._selection;
  }

  constructor(private router: Router) { }
  commitSelection(userPick) {
    of(null).pipe(delay(1000)).subscribe(() => {
    this._selection = userPick;
    this.userPick(this.selection);
    this.router.navigateByUrl("/results");
    


  });

  

  
}

userScore = 0;
compScore = 0;
userSelected: string; // Which weapon user selected
compSelected: string; //which weapon computer selected
action: string; //is known whether user weapon beats or loses to computer
status: string; //know whether it's a win or lose
compWeapons = [
  'rock',
  'paper',
  'scissors'
];

//userPick function which is executed whenever a 'weapon' is clicked
userPick(userWeapon: string): void {
  this.userSelected = userWeapon;
  console.log( this.userSelected);
  setTimeout( () => {
    const randomNum = Math.floor(Math.random() * 3);
    this.compSelected = this.compWeapons[randomNum];
    console.log(this.compSelected);
    this.checkResult();
  }, 1000);

}

//timer to clear selection for the next draw.
clearField() {
  setTimeout(() => {
    this.status = '';
    this.userSelected = '';
    this.compSelected = '';
  }, 4000);
}

//calls winner on user or comp based on the results
win(user, comp) {
  this.userScore ++;
  this.userSelected = user;
  this.compSelected = comp;
  this.action = 'beats';
  this.status = '. You win!';
  this.clearField();
}

//calls looser on user or comp based on the results
lose(user, comp) {
  this.compScore ++;
  this.userSelected = user;
  this.compSelected = comp;
  this.action = 'loses to';
  this.status = '. You lose!';
  this.clearField();
}
//calls draw based on the result
draw(user, comp) {
  this.userSelected = user;
  this.compSelected = comp;
  this.action = 'and';
  this.status = '. You draw!';
  this.clearField();
}

// check results to check if user or comp wins
checkResult() {
  const userChoice = this.userSelected;
  const compChoice = this.compSelected;
  switch (userChoice + compChoice) {
    case 'rockscissors':
    case 'paperrock':
    case 'scissorspaper':
      this.win(userChoice, compChoice);
      break;
    case 'rockpaper':
    case 'scissorsrock':
    case 'paperscissors':
      this.lose(userChoice, compChoice);
      break;
    default:
      this.draw(userChoice, compChoice);
      break;

  }
}

}
