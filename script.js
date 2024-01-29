// users picks either rock papers or scissors and his input is stored in a variable
// Provide options (array stored in a a variable)for the program to pick
// The program will pick a random word after the user inputs their choice
// Compare the users input with the programs choice
// // Rules paper beats rock, rock beats scissors, scissors beats paper
function startGame() {
    const getUserChoice = prompt("Please choose either rock, paper scissor");
    return getUserChoice.toLowerCase()
}

function checkPlayerSelection(playerSelection, gameOptions) {
    for (let i = 0; i < gameOptions.length; i++) {
        if (playerSelection === gameOptions[i]) {
            return true;
        }
    }
    return false;
}

function score(playerSelection) {
    const gameOptions = ["rock", "paper", "scissor"];

    const getComputerChoice = gameOptions[Math.floor(Math.random() * gameOptions.length)]

    if (checkPlayerSelection(playerSelection, gameOptions)) {
        if (playerSelection === "rock" && getComputerChoice === "paper") {
            console.log("You lose! Paper beats rock ")
            return 0
        } else if (playerSelection === "paper" && getComputerChoice === "scissor") {
            console.log("You lose! Scissors beat paper")
            return 0
        } else if (playerSelection === "scissor" && getComputerChoice === "rock") {
            console.log("You lose! Rock beats scissor")
            return 0

        } else if (playerSelection === getComputerChoice) {
            console.log("Thats a draw! Play again?")
            return 2
        }
        else {
            console.log(("You won! " + playerSelection + " beats " + getComputerChoice))
            return 1
        }
    }
    else {
        console.log("Incorrect choice!")
        return 0
    }
}


function game() {
    let playerScore = 0;
    let compScore = 0;
    let draw = 0;
    for (let i = 0; i < 5; i++) {
        let playerSelection = startGame()
        let scores = score(playerSelection)
        if (scores === 1) {
            playerScore++
        }
        else if (scores === 0) {
            compScore++
        }
        else {
            draw++
        }
    }
    if (playerScore > compScore) {
        console.log(`You won you scored ${playerScore} aganist ${compScore} and drew ${draw}`)
    }
    else {
        console.log(`You lost you scored ${playerScore} aganist ${compScore} and drew ${draw}`)
    }
}

console.log(game());
