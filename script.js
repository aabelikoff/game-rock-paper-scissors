let playerScore=0,
    computerScore=0;

const gameItems=['Rock','Paper','Scissors'];

function computerPlay(){
    let i=Math.floor((Math.random()*8)/3);
    return gameItems[i];
}

function singleRound(playerSelection, computerSelection){
    let roundResult;
    let roundAction='beats';
    
    if (playerSelection===computerSelection){
        roundResult='Draw';
        roundAction='equal to';
    }
    else if ((playerSelection==='Rock' && computerSelection==='Scissors') || 
             (playerSelection==='Paper' && computerSelection==='Rock') ||
             (playerSelection==='Scissors' && computerSelection==='Paper')){
                roundResult='You win';
                playerScore++;
             }
    else {
        roundResult='You loose';
        let a=computerSelection;
        computerSelection=playerSelection;
        playerSelection=a;
        computerScore++;
    }
    let outcomeString=`${roundResult}! ${playerSelection} ${roundAction} ${computerSelection}`;
    console.log(outcomeString);
    return outcomeString;
}

function checkInput(str){
    str=str.toLowerCase();
    str=str.charAt(0).toUpperCase()+str.slice(1);
    for (let i=0;i<gameItems.length;i++){
        if (str===gameItems[i]){
            return str;
        }
    }
    return;
}

function playerPlay(){
    let playerChoice=prompt('Enter your choice: rock, paper or scissors: ');
    while  (checkInput(playerChoice)===undefined){
        console.log('Wrong input! Try one more time');
        playerChoice=prompt('Enter your choice: rock, paper or scissors: ');
    }
    return checkInput(playerChoice);
}

function endGame(){
    let winner;
    if (playerScore===5 || computerScore===5){
        winner=playerScore>computerScore ? 'You':'Computer';
    }
    let finalString=`${winner} won!!!`;
    console.log(finalString);
    return finalString;
}

function gaming() {
    while (computerScore<5 && playerScore<5){
        singleRound(playerPlay(),computerPlay());
        keepScore();
    }
    endGame();
}

function keepScore(){
    let resultString=`Your score: ${playerScore}  Computer score: ${computerScore}`;
    console.log(resultString);
}

gaming();
