"use strict"

let playerScore = 0;
let computerScore = 0;

let roundOfGame = "";

let winnerMsg = "";
let loserMsg = "";
let tieMsg = "";

let getUserChoice = "";

let finalScoreMsg = "";
let displayScore = "";

let gameActive = true;


//get random number from 1 to 3
let getRandomNumber = () => Math.floor(Math.random() * 3 + 1);


let getComputerChoice = function() {
	if (getRandomNumber() === 1) return "rock"
	else if(getRandomNumber() === 2) return "paper"
	else return "scissors"
};

//using if else statement returns a variable according to the winner of the round
let playRound = function(playerSelection, computerSelection) {
	if (playerSelection === computerSelection) {
		return tieMsg = `The game is tie! ${playerSelection} equals ${computerSelection}.`;
	} else if (
		(playerSelection === "paper" && computerSelection === "rock") ||
		(playerSelection === "rock" && computerSelection === "scissors") ||
		(playerSelection === "scissors" && computerSelection === "paper")
	) {
		return winnerMsg = `It's a win for you! ${playerSelection} beats ${computerSelection}.`;
	} else {
		return loserMsg = `Computer wins! ${playerSelection} can't beat ${computerSelection}.`;
	}
};


let playGame = function(userSelection) {
	getUserChoice = prompt("Rock, Paper or Scissors?");

	roundOfGame = playRound(getUserChoice, getComputerChoice());

	console.log(roundOfGame);
};


let calcResult = function(roundResult) {
	if (roundResult === winnerMsg) return playerScore += 1
	else if (roundResult === loserMsg) return computerScore += 1
};


let endGame = () => {
	if (playerScore === 5 || computerScore === 5) gameActive = false;
};


let getFinalScore = function() {
		if (playerScore > computerScore) return finalScoreMsg = `You win! Congratulations!`
		else return finalScoreMsg = `You lose. Better luck next time...`
};


let showResults = function() {
		displayScore = `Final score: ${playerScore}:${computerScore}`;
		console.log(getFinalScore(), displayScore);
};


let game = function() {

	while (gameActive) {
		playGame();
		calcResult(roundOfGame);
		endGame();
	}

	showResults();

};

game();