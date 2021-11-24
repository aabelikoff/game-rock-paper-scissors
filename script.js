//Variables for score
let playerScore=0,
    computerScore=0;
//Array for keeping game items
const gameItems=['Rock','Paper','Scissors'];

//Function for computer playing
function computerPlay(){
    let computerChoice=(Math.floor((Math.random()*8)))/3;
    computerChoice=Math.floor(computerChoice);
    return gameItems[computerChoice];
}
//console.log(computerPlay());
//Function for single Round
function singleRound(playerSelection, computerSelection){
    let roundResult;
    let roundAction='equal to';
    
    if (playerSelection===computerSelection){
        roundResult='Draw';
    }
    else if ((playerSelection==='Rock' && computerSelection==='Scissors') || 
             (playerSelection==='Paper' && computerSelection==='Rock') ||
             (playerSelection==='Scissors' && computerSelection==='Paper')){
                roundResult='You win';
                roundAction='beats';
                playerScore++;
             }
    else {
        roundResult='You loose';
        roundAction='is beaten by';
        computerScore++;
    }
    let outcomeString=`${roundResult}! ${playerSelection} ${roundAction} ${computerSelection}`;
    console.log(outcomeString);
    return outcomeString;
}
//console.log(singleRound('Paper','Scissors'));
//Function for checking player input
function checkInput(str){
    let incomeString=str;
    //incomeString.trim();
    //console.log()
    incomeString=incomeString.toLowerCase();
    let subString=incomeString.charAt(0);
    subString=subString.toUpperCase();
    incomeString=incomeString.replace(incomeString[0],subString);
    for (let i=0;i<gameItems.length;i++){
        if (incomeString===gameItems[i]){
            return incomeString;
        }
    }
    return undefined;
}
//console.log(checkInput('paPEr'));
//Function for player selection
function playerPlay(){
    let playerChoice=prompt('Enter your choice: rock, paper or scissors: ');
    while  (checkInput(playerChoice)===undefined){
        console.log('Wrong input! Try one more time');
        playerChoice=prompt('Enter your choice: rock, paper or scissors: ');
    }
    return checkInput(playerChoice);
}
//console.log(playerPlay());
//Function endgame
function endGame(){
    let winner;
    
    if (playerScore===5 || computerScore===5){
        winner=playerScore>computerScore ? 'You':'Computer'
    }
    let finalString=`${winner} won!!!`;
    console.log(finalString);
    return finalString;
}
//Game process
function gaming() {
   while (computerScore<5 && playerScore!==5){
    singleRound(playerPlay(),computerPlay());
    keepScore();
    }
    endGame();
}

//Function keeping score
function keepScore(){
    let resultString=`Your score: ${playerScore}  Computer score: ${computerScore}`;
   console.log(resultString);
}

gaming();
