// begin with a function called computerPlay 
// that will randomly return either ‘Rock’, ‘Paper’ or ‘Scissors’. 
// We’ll use this function in the game to make the computer’s play.

const computerPlay = () => {
    let choices = ['rock', 'paper', 'scissors'];
    let computerChoice = choices[Math.floor(Math.random() * 3)];

    return computerChoice;
}

const playerSelection = () => {
    let playerChoice = prompt();
    playerChoice = playerChoice;

    return playerChoice;
}
//const playerSelection = "rock";

function playRound(computerPlay, playerSelection) {
    let computerWin = 0;
    let playerWin = 0;
    if(computerPlay === 'rock') {
        if (playerSelection === 'paper') {
            return 'You Win! Paper beats Rock';
            computerWin = 0;
            playerWin = 1;
        } else if (playerSelection === 'scissors') {
            return 'You Lose! Rock beats Scissors';
            computerWin = 1;
            playerWin = 0;
        } else if(computerPlay === 'rock') {
            return "It's a tie!";
            computerWin = 0;
            playerWin = 0;
        }
    } else if(computerPlay === 'paper') {
        if (playerSelection === 'paper') {
            return "It's a tie!";
            computerWin = 0;
            playerWin = 0;
        } else if (playerSelection === 'scissors') {
            return 'You win! Scissors beats Paper';
            computerWin = 0;
            playerWin = 1;
        } else if(playerSelection === 'rock') {
            return 'You lose! Paper beats Rock!';
            computerWin = 1;
            playerWin = 0;
        }
    } else if(computerPlay === 'scissors') {
        if (playerSelection === 'paper') {
            return "You lose! Scissors beats Paper!";
            computerWin = 1;
            playerWin = 0;
        } else if (playerSelection === 'scissors') {
            return "It's a tie!";
            computerWin = 0;
            playerWin = 0;
        } else if(playerSelection === 'rock') {
            return 'You win! Rock beats Scissors!';
            computerWin = 0;
            playerWin = 1;
        }
    }
}

function game() {

    let computerScore = 0;
    let playerScore = 0;

    for(let i = 0; i< 5; i++) {
        playRound(computerPlay(), playerSelection());

        if(computerWin) {
            computerScore +=1;
        } else  {
            playerScore +=1;
        }
        console.log(computerScore + "," + playerScore)
    }

    if(computerScore > playerScore) {
        return 'Computer wins!'
    } else return 'Player wins!'
}

//const computerSelection = computerPlay();
//console.log(playRound(computerPlay(), playerSelection));
console.log(game());