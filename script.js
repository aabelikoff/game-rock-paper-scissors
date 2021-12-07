let playerScore = 0,
    computerScore = 0,
    countOfRounds = 0;
let playerSelection = '';
let computerSelection = '';
let result=document.querySelector('.result');

let countR=document.querySelector('#countR');
countR.textContent = '';

let pChoicePic = document.querySelector('.pChoicePic');
let cChoicePic = document.querySelector('.cChoicePic');

const gameItems = ['rock','paper','scissors'];

const buttons = Array.from(document.querySelectorAll('button'));

buttons.forEach((button) => button.addEventListener('click', playRound));
buttons.forEach((button) => button.addEventListener('transitionend', removeChangeButton));
buttons.forEach((button) => button.addEventListener('click', changeBorder));

function removePic () {
    Array.from(arguments).forEach(removeLastClass);
}

function removeLastClass(element) {
    let e=Array.from(element.classList);
    if (e.length > 1){
        element.classList.remove(e[e.length-1]);
    }
}

function hidePic () {
    Array.from(arguments).forEach((elem) => elem.classList.add('hide'));
}

function changeBorder (e) {
    e.target.classList.add('clickedButton');
}

function removeChangeButton (e) {
    if (e.propertyName!=='transform') return;
    this.classList.remove('clickedButton');
}

function playRound (e) {
    removePic(pChoicePic, cChoicePic);
    if (countOfRounds === 0){
        removeLastClass(result);
    }
    countR.textContent = ` ${++countOfRounds}`;
    playerSelection = e.target.getAttribute('id');
    computerSelection = computerPlay();
    document.querySelector('.pChoice p').textContent = 'Your choice: '+ playerSelection;
    document.querySelector('.cChoice p').textContent = 'Computer choice: '+computerSelection;
    pChoicePic.classList.add(`${playerSelection}`);
    cChoicePic.classList.add(`${computerSelection}`);
    result.textContent = analyzeResult ();
    keepScore();
    if (playerScore === 5 || computerScore === 5) {
        endGame();
    }
}

function analyzeResult (){
    let roundResult;
    let roundAction = 'beats';
    if (playerSelection === computerSelection){
        roundResult = 'Tie';
        roundAction = 'equal to';
    }
    else if ((playerSelection === 'rock' && computerSelection === 'scissors') || 
             (playerSelection === 'paper' && computerSelection === 'rock') ||
             (playerSelection === 'scissors' && computerSelection === 'paper')){
                roundResult = 'You win';
                playerScore++;
             }
    else {
        roundResult = 'You loose';
        let a = computerSelection;
        computerSelection = playerSelection;
        playerSelection = a;
        computerScore++;
    }
    let outcomeString = `${roundResult}! ${playerSelection} ${roundAction} ${computerSelection}`;
    return outcomeString;
}

function computerPlay(){
    let i = Math.floor((Math.random()*8)/3);
    return gameItems[i];
}

function endGame(){
    let winner = '';
    let finalString = '';
    if (playerScore === computerScore){
        finalString = "It's a  tie!";
    } else {
        winner = playerScore > computerScore ? 'You':'Computer';
        finalString = `${winner} won!!!`;
    }
    keepScore();
    playerScore = computerScore = countOfRounds = 0;
    countR.textContent = '';
    document.querySelector('.pChoice p').textContent = '';
    document.querySelector('.cChoice p').textContent = '';
    result.textContent = finalString;
    result.classList.add('highres');
    playerSelection = computerSelection = '';
    removePic(pChoicePic, cChoicePic);
    hidePic(pChoicePic, cChoicePic);
    return finalString;
}

function keepScore(){
    document.querySelector('.score > div').textContent = `Your score: ${playerScore}  Computer score: ${computerScore}`;
}