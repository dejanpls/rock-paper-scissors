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


//according the getRandomNumber() return rock, paper or scissors
let getComputerChoice = function() {
	if (getRandomNumber() === 1) return "rock"
	else if(getRandomNumber() === 2) return "paper"
	else return "scissors"
};

//return a variable according to the winner of the round
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

//prompt the user for input
//run the playRound()
//print the result saved in a variable roundOfGame
let playGame = function() {
	getUserChoice = prompt("Rock, Paper or Scissors?");
	
	roundOfGame = playRound(getUserChoice, getComputerChoice());

	console.log(roundOfGame);
};


//increase the score according to the outcome ot the roundOfGame
let calcResult = function(roundResult) {
	if (roundResult === winnerMsg) return playerScore += 1
	else if (roundResult === loserMsg) return computerScore += 1
};


//in case of the either score reaching five, end game
let endGame = () => {
	if (playerScore === 5 || computerScore === 5) gameActive = false;
};


//return a final score message according who reached the number five first
let getFinalScore = function() {
		if (playerScore > computerScore) return finalScoreMsg = `You win! Congratulations!`
		else return finalScoreMsg = `You lose. Better luck next time...`
};


//print the score to the console after the game has finished
let showResults = function() {
		displayScore = `Final score: ${playerScore}:${computerScore}`;
		console.log(getFinalScore(), displayScore);
};



//calling the previous functions in a while loop
//show the results upon gameActive = false;
let game = function() {

	while (gameActive) {
		playGame();
		calcResult(roundOfGame);
		endGame();
	}

	showResults();

};

//call game()
game();