// users picks either rock papers or scissors and his input is stored in a variable
// Provide options (array stored in a a variable)for the program to pick
// The program will pick a random word after the user inputs their choice
// Compare the users input with the programs choice
//Rules paper beats rock, rock beats scissors, scissors beats paper

const getUserChoice = prompt("Please choose either rock, paper scissor");
const playerSelection = getUserChoice.toLowerCase()
const gameOptions = ["rock", "paper", "scissor"];

const getComputerChoice = gameOptions[Math.floor(Math.random() * gameOptions.length)]

function score() {
    if (playerSelection === "rock" && getComputerChoice === "paper") {
        return "You lose! Paper beats rock "
    } else if (playerSelection === "paper" && getComputerChoice === "scissor") {
        return "You lose! Scissors beat paper"
    } else if (playerSelection === "scissor" && getComputerChoice === "rock") {
        return "You lose! Rock beats scissor"

    } else if (playerSelection === getComputerChoice) {
        return "Thats a draw! Play again?"
    }
    else {
        return ("You won! " + playerSelection + " beats " + getComputerChoice)
    }
}
console.log(score());
