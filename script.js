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
        gameResult = `You won! ${formatPlayerSelection} beats ${computerSelection}`;
    }
    else {
        gameResult = `You lose! ${computerSelection} beats ${formatPlayerSelection}`;
    }
    return gameResult;
}

//game(play) 5 rounds console.log for each round winner get Input through prompt()

