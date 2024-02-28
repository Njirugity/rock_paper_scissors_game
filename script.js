let userSCore = 0;
let computerScore = 0;
const userSCoreSpan = document.getElementById('userScore');
const computerScoreSpan = document.getElementById('computerScore');
const scoreBoard = document.querySelector('.scoreBoard')
const result = document.querySelector('.result');
const rock = document.getElementById('rockIcon');
const paper = document.getElementById('paperIcon');
const scissors = document.getElementById('scissorsIcon');
const winPara = document.getElementById('winPara');

function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"]
    const compChoices = choices[Math.floor(Math.random() * choices.length)];
    return compChoices
}
// getComputerChoice()


function game(userChoice) {
    const computerChoice = getComputerChoice();
    if (
        ((userChoice === "rock") && (computerChoice === "scissors")) ||
        ((userChoice === "paper") && (computerChoice === "rock")) ||
        ((userChoice === "scissors") && (computerChoice === "paper"))
    ) {
        userSCore++;
        userSCoreSpan.textContent = userSCore

        winPara.textContent = `You win; ${userChoice} beats  ${computerChoice}`



    } else if (userChoice === computerChoice) {
        console.log(`Its a draw, You chose ${userChoice} and the computer chose ${computerChoice}`)
        winPara.textContent = 'Its a tie'
    } else {
        computerScore++;
        computerScoreSpan.textContent = computerScore;
        winPara.textContent = `You lose; ${computerChoice} beats  ${userChoice}`
    }
}

// game()

function playGame() {
    rock.addEventListener('click', function () {
        game("rock")
    })
    paper.addEventListener('click', function () {
        game("paper")
    })
    scissors.addEventListener('click', function () {
        game("scissors")
    })
}
playGame();

