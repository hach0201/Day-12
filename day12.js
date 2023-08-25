//console.log("hello world");


/* la fonction getComputerChoice
function getComputerChoice() {
    const randomnumber = Math.floor(Math.random() * 3); 
    switch (randomnumber) {
      case 0:
        return 'Rock';
      case 1:
        return 'Paper';
      case 2:
        return 'Scissors';
      default:
        return 'Invalid choice';
    }
  }
console.log(getComputerChoice());

function playRound(playerSelection, computerSelection){
    
    const valid = ['Rock', 'Paper','Scissors'];

    const playerChoice = playerSelection.toUpperCase();
    const computerChoice = computerSelection.toUpperCase();

    if (playerSelection === computerSelection){
        return "equal !";
    } else if (
        (playerSelection === 'rock' && computerSelection === 'scissors') ||
        (playerSelection === 'paper' && computerSelection === 'rock') ||
        (playerSelection === 'scissors' && computerSelection === 'paper')
    ) { 
        return "win !";

    } else { 
        return "lose !" ;
    }
}
const playerChoice = 'Rock';
const computerChoice = 'Scissors';
const result = playRound(playerChoice, computerChoice);
console.log(result);

function game() {
    let playerScore = 0;
    let computerScore = 0;

   for (let jeux = 1; jeux <= 5; jeux++){
      if (result === "win !"){
        playerScore++ ;
      } else if (result === "lose !"){
        computerScore++;
      }
        console.log(result);
     }
   if (computerScore > playerScore){
       console.log("the computer is the winner")
      } else if (computerScore < playerScore){
       console.log("i'm the winner")
      }
}
game();*/

function getComputerChoice() {
    const randomnumber = Math.floor(Math.random() * 3); 
    switch (randomnumber) {
        case 0:
            return 'Rock';
        case 1:
            return 'Paper';
        case 2:
            return 'Scissors';
        default:
            return 'Invalid choice';
    }
}

const computerChoice = getComputerChoice();
console.log("Computer's choice:", computerChoice);

function playRound(playerSelection, computerSelection) {
    const validChoices = ['Rock', 'Paper', 'Scissors'];

    const playerChoice = playerSelection.toUpperCase();
    const computerChoice = computerSelection.toUpperCase();

    if (!validChoices.includes(playerChoice)) {
        return "Invalid input. Please choose 'Rock', 'Paper', or 'Scissors'.";
    }

    if (playerChoice === computerChoice) {
        return "It's a tie!";
    } else if (
        (playerChoice === 'ROCK' && computerChoice === 'SCISSORS') ||
        (playerChoice === 'PAPER' && computerChoice === 'ROCK') ||
        (playerChoice === 'SCISSORS' && computerChoice === 'PAPER')
    ) { 
        return "You win!";
    } else { 
        return "You lose!";
    }
}

const playerChoice = 'Rock';
const computerChoiceForRound = getComputerChoice();
const result = playRound(playerChoice, computerChoiceForRound);
console.log(result);

function game() {
    let playerScore = 0;
    let computerScore = 0;

    for (let jeux = 1; jeux <= 5; jeux++) {
        const playerChoiceForRound = prompt(`Round ${jeux}: Enter your choice: Rock, Paper, or Scissors`);
        const computerChoiceForRound = getComputerChoice();
        const result = playRound(playerChoiceForRound, computerChoiceForRound);

        if (result === "You win!") {
            playerScore++;
        } else if (result === "You lose!") {
            computerScore++;
        }
        console.log(result);
    }

    if (computerScore > playerScore) {
        return "The computer is the winner";
    } else if (computerScore < playerScore) {
        return "I'm the winner";
    } else {
        return "It's a tie!";
    }
}

const gameResult = game();
console.log(gameResult);
