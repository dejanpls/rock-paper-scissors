"use strict";

function getRandomNumber() {
  // random number from 1 to 9
  return Math.floor(Math.random() * 9) + 1;
}


function getComputerChoice() {
    if (getRandomNumber() <= 3) return "rock";
    else if (getRandomNumber() <= 6) return "paper";
    else return "scissors";
  }


function playRound(playerSelection, computerSelection) {
  let winner = "You win! Congratulations!";
  let loser = "You lose, better luck next time!"
  let tie = "It's a tie."

  if (playerSelection === "paper" && computerSelection === "scissors") return loser;
  else if (playerSelection === "rock" && computerSelection === "paper") return loser;
  else if (playerSelection === "scissors" && computerSelection === "rock") return loser;
  else if (playerSelection === computerSelection) return tie;
  else return winner;

}

const userChoice = prompt("Rock, Paper or Scissors?").toLowerCase();

console.log(playRound(userChoice, getComputerChoice()));