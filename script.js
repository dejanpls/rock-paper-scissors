let randomNumber = Math.floor(Math.random() * 9) + 1; // random numbers from 1 to 9


function getComputerChoice() {

    if (randomNumber <= 3) return "Rock";
    else if (randomNumber <= 6) return "Paper";
    else return "Scissors";
  }

console.log(getComputerChoice());