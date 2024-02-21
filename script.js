let userSCore = 0;
let computerScore = 0;
const userSCoreSpan = document.getElementById('userScore');
const computerScoreSpan = document.getElementById('computerScore');
const scoreBoard = document.querySelector('.scoreBoard')
const result = document.querySelector('.result');
const rock = document.getElementById('rockIcon');
const paper = document.getElementById('paperIcon');
const scissors = document.getElementById('scissorsIcon');

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
        const winPara = document.createElement('p')
        winPara.textContent = `${userChoice} beats  ${computerChoice}`
        result.appendChild(winPara)


    } else if (userChoice === computerChoice) {
        console.log(`Its a draw, You chose ${userChoice} and the computer chose ${computerChoice}`)

    } else {
        computerScore++;
        computerScoreSpan.textContent = computerScore;
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
