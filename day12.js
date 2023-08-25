//console.log("hello world");

function getComputerChoice() {
    const choices = ['Rock', 'Paper', 'Scissors'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function playRound(playerSelection, computerSelection) {
    const validChoices = ['Rock', 'Paper', 'Scissors'];

    const playerChoice = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1).toLowerCase();
    const computerChoice = computerSelection;

    if (!validChoices.includes(playerChoice)) {
        return "Invalid input. Please choose 'Rock', 'Paper', or 'Scissors'.";
    }

    if (playerChoice === computerChoice) {
        return "It's a tie!";
    } else if (
        (playerChoice === 'Rock' && computerChoice === 'Scissors') ||
        (playerChoice === 'Paper' && computerChoice === 'Rock') ||
        (playerChoice === 'Scissors' && computerChoice === 'Paper')
    ) {
        return `You win! ${playerChoice} beats ${computerChoice}.`;
    } else {
        return `You lose! ${computerChoice} beats ${playerChoice}.`;
    }
}

function game() {
    const playerChoice = prompt("Enter your choice: Rock, Paper, or Scissors");
    const computerChoice = getComputerChoice();
    const result = playRound(playerChoice, computerChoice);
    console.log(result);
}

game();
