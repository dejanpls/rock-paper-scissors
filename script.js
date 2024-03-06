const container = document.querySelector(".container");
const buttons = document.querySelectorAll(".play");
const resetBtn = document.querySelector(".reset");
const result = document.querySelector("p.result");
const currentScore = document.querySelector("p.score");
const wonLostTie = document.querySelector("h3.wonLostTie");
const startContainer = document.querySelector(".start-container");
const startBtn = document.querySelector("button.start");
const input = document.querySelector("#name");

const gameTitle = document.querySelector("h1.title");


// currentScore.style.visibility = "hidden";
// finalMsg.style.visibility = "hidden";
container.style.display = "none";

const rps = ["rock", "paper", "scissors"];
let playerSelection;
let computerSelection;
let roundResult;
let playerScore = 0;
let computerScore = 0;
let name = "";

// main function
function game(e) {

  playerSelection = e.target.textContent;
  computerSelection = getComputerChoice();
  roundResult = playRound(playerSelection, computerSelection);

  updateScore();
  displayWhoWon();
  result.textContent = roundResult;
  // currentScore.style.visibility = "visible";
  displayCurrentScore();

  if (playerScore === 5 || computerScore === 5) {
    buttons.forEach(button => button.style.display = "none");
    resetBtn.textContent = "Wanna play again?";
    showFinalMsg(playerScore, computerScore);
  }

  resetBtn.addEventListener("mousedown", reset);
  
}

startBtn.addEventListener("mousedown", (e) => {
    startContainer.style.display = "none";
    container.style.display = "flex";
    name = input.value;
  })

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

  ) { return `${playerSelection.toUpperCase()} beats ${computerSelection.toUpperCase()}.`;

  } else if (playerSelection === computerSelection) {
      return `${playerSelection.toUpperCase()} equals ${computerSelection.toUpperCase()}.`;

  } else if (!rps.includes(playerSelection)) {
      return `${playerSelection.toUpperCase()} is invalid. Please try again.`;

  } else {
      return `${playerSelection.toUpperCase()} loses to ${computerSelection.toUpperCase()}.`;
  }
}

function updateScore() {
  if (roundResult.includes("beats")) {
    playerScore++;
  }
  else if (roundResult.includes("loses")) {
    computerScore++;
  }
}

function showFinalMsg(playerScore, computerScore) {
  if (playerScore > computerScore) wonLostTie.textContent = `You won! Congratulations!`;
  else wonLostTie.textContent = `You lost! Better luck next time.`;
}

function reset() {
  buttons.forEach(button => button.style.display = "inline");
  resetBtn.textContent = "Reset";
  wonLostTie.textContent = "Ready?";
  wonLostTie.style.color = "#e0e1dd";
  result.textContent = "Let's play a game!";
  // resets the score to zero
  playerScore = 0;
  computerScore = 0;
  displayCurrentScore();
}

function displayCurrentScore() {
  if (name) {
    currentScore.textContent = `${name}: ${playerScore} Computer: ${computerScore}`;
  } else {
    currentScore.textContent = `Player: ${playerScore} Computer: ${computerScore}`;
  }
}

function displayWhoWon() {
  if (roundResult.includes("beats")) {
    wonLostTie.textContent = "YOU WIN";
    wonLostTie.style.color = "#588157";
  }
  else if (roundResult.includes("loses")) {
    wonLostTie.textContent = "YOU LOST";
    wonLostTie.style.color = "#f95738";
  } else {
    wonLostTie.textContent = "IT'S A TIE";
    wonLostTie.style.color = "#e0e1dd";
  }
}