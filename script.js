// Rock paper scissors game

// Initialize the array or choices and variables.
const rps = ["rock", "paper", "scissors"];
let playerSelection;
let computerSelection;
let roundResult;
let playerScore = 0;
let computerScore = 0;

// Create a function so that a computer randomly chooses rps for array of choices.
let getComputerChoice = () => {
  return rps[Math.floor(Math.random() * rps.length)];
}

// Play a single game of rps.
// Function takes in two parameters, returns a winner string.
  // if playerSelection uppercase, turn it to lowercase.
  // if playerSelection invalid, show the appropriate message.

let playRound = (playerSelection, computerSelection) => {
  if (playerSelection.toLowerCase() === "rock" && computerSelection === "scissors") {
    return `${playerSelection} beats ${computerSelection}. You WIN!`

  } else if (playerSelection.toLowerCase() === "paper" && computerSelection === "rock") {
      return `${playerSelection} beats ${computerSelection}. You WIN!`

  } else if (playerSelection.toLowerCase() === "scissors" && computerSelection === "paper") {
      return `${playerSelection} beats ${computerSelection}. You WIN!`

  } else if (playerSelection.toLowerCase() === computerSelection) {
      return `${playerSelection} equals ${computerSelection}. It's a TIE!`;

  } else if (!rps.includes(playerSelection.toLowerCase())) {
      return `${playerSelection} is invalid. Please try again.`;
  } else {
      return `${playerSelection} loses to ${computerSelection}. You LOSE!`
  }
}

// Write game() to play best of five.
  // if user or computer wins === 5, end game.
let game = () => {

  while (true) {

    // Get user input and generate random choice from the array and call the function.
    playerSelection = prompt("Rock, Paper or Scissors?", "scissors");
    computerSelection = getComputerChoice();
    roundResult = playRound(playerSelection, computerSelection);

    // Show round result and increment the score appropriately.
    if (roundResult.includes("WIN")) {
      console.log(roundResult);
      playerScore++;
    } else if (roundResult.includes("LOSE")) {
      console.log(roundResult);
      computerScore++;
    } else {
      console.log(roundResult);
    }

    // Show the result of the game at the end. Break out of the loop.
    if (playerScore === 5) {
      console.log(`You won! Congratulations! The score was ${playerScore}:${computerScore}.`);
      break;
    }
    if (computerScore === 5) {
      console.log(`You lost! Better luck next time. The score was ${playerScore}:${computerScore}.`);
      break;
    }
  }
}

game();