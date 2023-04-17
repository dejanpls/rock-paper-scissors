"use strict";

function getRandomNumber() {
  // random number from 1 to 9
  return Math.floor(Math.random() * 9) + 1;
}

function getComputerChoice() {
    if (getRandomNumber() <= 3) return "Rock";
    else if (getRandomNumber() <= 6) return "Paper";
    else return "Scissors";
  }


function getUserChoice(choice) {
  choice = prompt("Rock, Paper or Scissors?").toLowerCase();
  return choice;
}