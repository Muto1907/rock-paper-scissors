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



//play(playerSelection, computerSelection) return a Winnerdeclaration String
//      playerSelection case insensitive


//game(play) 5 rounds console.log for each round winner get Input through prompt()

