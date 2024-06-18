let playerSelection
,   computerSelection
,   playerPoints = 0
,   computerPoints = 0;


const rockBtn = document.createElement("button");
const paperBtn = document.createElement("button");
const scissorBtn = document.createElement("button");
const mainCard = document.querySelector("#main");
const standingCard = document.querySelector('#standing');
const playerScore = document.querySelector('#player-score');
const computerScore = document.querySelector('#computer-score');
const eventScore = document.querySelector('#event');


rockBtn.innerText = "Rock";
paperBtn.innerText = "Paper";
scissorBtn.innerText = "Scissors";
mainCard.appendChild(rockBtn);
mainCard.appendChild(paperBtn);
mainCard.appendChild(scissorBtn);

rockBtn.addEventListener("click", () => playRound(rockBtn.textContent, getComputerChoice()));
paperBtn.addEventListener("click", () => playRound(paperBtn.textContent, getComputerChoice()));
scissorBtn.addEventListener("click", () => playRound(scissorBtn.textContent, getComputerChoice()));




function getComputerChoice(){
    let choice;
    const options = ['Rock', 'Paper', 'Scissors'];
    let randomNum = Math.floor(Math.random() * 3);
    choice = options[randomNum];
    return choice;
}

function playRound(playerSelection, computerSelection){
    console.log(`You picked: ${playerSelection} | The computer picked ${computerSelection}`)
    if(playerSelection === computerSelection){
        gameResult = `It's a draw! You both picked ${playerSelection}`;
    }
    else if ((playerSelection === 'Paper' && computerSelection === 'Rock')
    || (playerSelection === 'Rock' && computerSelection === "Scissors")
    || (playerSelection === 'Scissors' && computerSelection === 'Paper')){
        gameResult = `You win! ${playerSelection} beats ${computerSelection}`;
        playerPoints++;
    }
    else {
        gameResult = `You lose! ${computerSelection} beats ${playerSelection}`;
        computerPoints++;
    }
    eventScore.textContent = gameResult;
    if(!(playerPoints > 5 || computerPoints > 5)){
        playerScore.innerText = playerPoints;
        computerScore.innerText = computerPoints;
    }
    if(playerPoints == 5){
        eventScore.textContent = `You are the winner with a final score of ${playerPoints} to ${computerPoints} Congratulations!!`;
    }
    else if(computerPoints == 5){
        eventScore.textContent = `You lose with a final score of ${playerPoints} to ${computerPoints} Unlucky!!`;
    }


}

function game (){

        console.log(gameResult);
        console.log(`Standing: Player ${playerPoints} - Computer ${computerPoints}`);
    
    if(playerPoints > computerPoints){
        console.log(`You are the winner with a final score of ${playerPoints} to ${computerPoints} Congratulations!!`);
    }
    else if(playerPoints < computerPoints){
        console.log(`You lose with a final score of ${playerPoints} to ${computerPoints} Unlucky!!`);
    }
    else {
        console.log("It's a draw! Well played everyone!");
    }
}

