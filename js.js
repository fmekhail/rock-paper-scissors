// Computer randomly picks rock, paper or scissors

const choices = ['rock', 'paper', 'scissors'];
const computerSelection = choices[Math.floor(Math.random()*choices.length)];

console.log(computerSelection);


// Player picks rock, paper or scissors
const playersPick = prompt("Rock, Paper or Scissors?");
const playerSelection = playersPick.toLowerCase();

console.log(playerSelection);


// Compare results
    if (playerSelection == 'rock' && computerSelection == 'scissors') {
        alert ("YOU WIN!");
    } else if (playerSelection == 'rock' && computerSelection == 'paper') {
        alert ("...you lose...");
    } else if (playerSelection == 'scissors' && computerSelection == 'rock') {
        alert ("...you lose...");
    } else if (playerSelection == 'paper' && computerSelection == 'rock') {
        alert ("YOU WIN!");
    } else if (playerSelection == 'paper' && computerSelection == 'scissors') {
        alert ("...you lose...");
    } else if (playerSelection == 'scissors' && computerSelection == 'paper') {
        alert ("YOU WIN!");
    } else {
        alert ("It's a tie");
    };

