import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { GameResult, PlayerChoice, RoundsSelect } from './models/game';
import { HttpClient } from '@angular/common/http';
import { ScoreboardComponent } from './routes/Scoreboard/scoreboard/scoreboard.component';
import { ChoiceComponent } from './routes/choice/choice.component';



@Injectable({
  providedIn: 'root'
})
export  class RockService {

  private _userSelection?: string;
  private _compSelection?: string;
  private _gameResult?: string;
  public userName: string;
  private _roundSelection?: string;
  public roundsSelect:number;
  public userselectionArray:PlayerChoice[] = [];
  public gameresultArray: any = [];
  private _selection?: string;
  private _comChoice?: string;
  private _result?: string;
 
  
 // private _scorePlayer: string;


  get userSelection() {
    return this._userSelection;
  }
  get compSelection() {
    return this._compSelection;
  }
  get gameResult() {
      return this._gameResult;
  }
  
  get roundSelection() {
    return this._roundSelection;
  }
  get comChoice() {
    return this._comChoice;
  }
  get result() {
    return this._result;
  }


  

  constructor(private router: Router, private httpClient: HttpClient) { }
  
  adduserselectiontoArray(userselected: string, maxrounds: number, roundcounter: number){
    let Data = {
    playerChoice: userselected,
    userName: this.userName,
    currentRound: roundcounter,
    maxRounds: maxrounds
    }
    
    this.userselectionArray.push(Data);
    }



  //userPick function which is executed whenever a 'weapon' is clicked
  commitSelection(selectOption){  
  let request = this.httpClient.post<GameResult>("http://localhost:5000/Game/rounds", this.userselectionArray); {
    request.subscribe((response)=> {
      console.log(response);
      this.gameresultArray = response;


    
      //playerChoice: userWeapon, userName:userName
   // } //as PlayerChoice);
   // console.log(userWeapon,userName);
   // request.subscribe((response) => {
    //  console.log(response);
    //  this._userSelection = response.playerChoice;
    //  this._compSelection = response.cpuChoice;
    //  this._gameResult = response.gameResult;
    //  this.userName = response.userName;
    //  console.log(response)
    //  this.router.navigateByUrl("/results"); 
            
    });
  }
  //}
  /*  commitRoundSelection(userRound: string, userName: string){
      userName = this.userName
   //  
    let request = this.httpClient.post<RoundChoice>("http://localhost:5000/game", {
       roundChoice: userRound, userName:userName
      } as RoundChoice);
      console.log(userRound,userName);
      request.subscribe((response) => {
        console.log(response);
        this._roundSelection = response.roundChoice;
        this.userName = response.userName;
        console.log(response)
        this.router.navigateByUrl("/choice");
              
      });
      
  }
}


  // setTimeout( () => {
  //   const randomNum = Math.floor(Math.random() * 3);
  //   this.compSelected = this.compWeapons[randomNum];
  //   console.log(this.compSelected);
  //   this.checkResult();
  // }, 1000);



  // commitSelection(userPick) {
  //   of(null).pipe(delay(1000)).subscribe(() => {
  //   this._selection = userPick;
  //   this.userPick(this.selection);
  //   this.router.navigateByUrl("/results");
    


  // });



// compWeapons = [
//   'rock',
//   'paper',
//   'scissors'
// ];



//timer to clear selection for the next draw.
// clearField() {
//   setTimeout(() => {
//     this.status = '';
//     this.userSelected = '';
//     this.compSelected = '';
//   }, 4000);
// }

//calls winner on user or comp based on the results
// win(user, comp) {
//   this.userScore ++;
//   this.userSelected = user;
//   this.compSelected = comp;
//   this.action = 'beats';
//   this.status = '. You win!';
//   this.clearField();
// }

//calls looser on user or comp based on the results
// lose(user, comp) {
//   this.compScore ++;
//   this.userSelected = user;
//   this.compSelected = comp;
//   this.action = 'loses to';
//   this.status = '. You lose!';
//   this.clearField();
// }
//calls draw based on the result
// draw(user, comp) {
//   this.userSelected = user;
//   this.compSelected = comp;
//   this.action = 'and';
//   this.status = '. You draw!';
//   this.clearField();
// }

// check results to check if user or comp wins
// checkResult() {
//   const userChoice = this.userSelected;
//   const compChoice = this.compSelected;
//   switch (userChoice + compChoice) {
//     case 'rockscissors':
//     case 'paperrock':
//     case 'scissorspaper':
//       this.win(userChoice, compChoice);
//       break;
//     case 'rockpaper':
//     case 'scissorsrock':
//     case 'paperscissors':
//       this.lose(userChoice, compChoice);
//       break;
//     default:
//       this.draw(userChoice, compChoice);
//       break;*/
  }
}
