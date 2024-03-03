const body = document.querySelector("body");
const container = document.querySelector(".container");
const buttons = document.querySelectorAll(".play");
const resetBtn = document.querySelector(".reset");
const result = document.querySelector("p.result");
const currentScore = document.querySelector("p.score");
const finalMsg = document.querySelector("h3.final");

const rps = ["rock", "paper", "scissors"];
let playerSelection;
let computerSelection;
let roundResult;
let playerScore = 0;
let computerScore = 0;

// main function
function game(e) {

  playerSelection = e.target.textContent;
  computerSelection = getComputerChoice();
  roundResult = playRound(playerSelection, computerSelection);

  updateScore();
  result.textContent = roundResult;
  currentScore.textContent = `Player: ${playerScore} Computer: ${computerScore}`;

  if (playerScore === 5 || computerScore === 5) {
    buttons.forEach(button => button.style.display = "none");
    showFinalMsg(playerScore, computerScore);
  }

  resetBtn.addEventListener("mousedown", reset);
  
}

buttons.forEach(button => button.addEventListener("mousedown", game))

// functions

function getComputerChoice() {
  return rps[Math.floor(Math.random() * rps.length)];
}

function playRound(playerSelection, computerSelection) {

  if (
    playerSelection === "rock" && computerSelection === "scissors" ||
    playerSelection === "paper" && computerSelection === "rock" ||
    playerSelection === "scissors" && computerSelection === "paper" 

  ) { return `${playerSelection} beats ${computerSelection}. You WIN!`;

  } else if (playerSelection === computerSelection) {
      return `${playerSelection} equals ${computerSelection}. It's a TIE!`;

  } else if (!rps.includes(playerSelection)) {
      return `${playerSelection} is invalid. Please try again.`;

  } else {
      return `${playerSelection} loses to ${computerSelection}. You LOSE!`;
  }
}

function updateScore() {
  if (roundResult.includes("WIN")) playerScore++;
  else if (roundResult.includes("LOSE")) computerScore++;
}

function showFinalMsg(playerScore, computerScore) {
  if (playerScore > computerScore) finalMsg.textContent = `You won! Congratulations!`;
  else finalMsg.textContent = `You lost! Better luck next time.`;

  finalMsg.style.display = "block";
}

function reset() {
  buttons.forEach(button => button.style.display = "inline");
  finalMsg.style.display = "none";
  result.textContent = "Let's play a game!";
  // resets the score to zero
  playerScore = 0;
  computerScore = 0;
  currentScore.textContent = `Player: ${playerScore} Computer: ${computerScore}`;
}