//getComputerChoice randomly return Rock Paper or Scissors
//declare choice var
//initialize Array with ro pa sci
//random number between 0 and 2
//asign array[num] to choice and return

function getComputerChoice(){
    let choice;
    const options = ['Rock', 'Paper', 'Scissors'];
    let randomNum = Math.floor(Math.random() * 3);
    choice = options[randomNum];
    return choice;
}



//playRound(playerSelection, computerSelection) return a Winnerdeclaration String
//      playerSelection case insensitive
//capitalize playerSelection first letter: first char toUppercase and slice from pos 1 toUpperCase
//game logic if both the same draw else look if player wins and return string

function playRound(playerSelection, computerSelection){
    let gameResult;
    formatPlayerSelection = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1).toLowerCase();

    if(formatPlayerSelection === computerSelection){
        gameResult = `It's a draw! You both picked ${formatPlayerSelection}`;
    }
    else if ((formatPlayerSelection === 'Paper' && computerSelection === 'Rock')
    || (formatPlayerSelection === 'Rock' && computerSelection === "Scissors")
    || (formatPlayerSelection === 'Scissors' && computerSelection === 'Paper')){
        gameResult = `You win! ${formatPlayerSelection} beats ${computerSelection}`;
    }
    else {
        gameResult = `You lose! ${computerSelection} beats ${formatPlayerSelection}`;
    }
    return gameResult;
}

//game(play) 5 rounds console.log for each round winner get Input through prompt()

function game (){
    let playerSelection
    ,   computerSelection
    ,   playerPoints = 0
    ,   computerPoints = 0
    ,   gameResult;

    for(let i = 0; i < 5; i++){
        playerSelection = prompt("Time to pick! Rock, Paper or Scissors?");
        computerSelection = getComputerChoice();
        gameResult = playRound(playerSelection, computerSelection);
        if(gameResult.includes("win")) playerPoints++;
        else if(gameResult.includes("lose")) computerPoints ++;
        console.log(gameResult);
        console.log(`Standing: Player ${playerPoints} - Computer ${computerPoints}`);
    }
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