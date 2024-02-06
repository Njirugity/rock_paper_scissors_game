

const playGame = () => {

    const getUserChoice = prompt("Please choose either rock, paper scissor");

    const playerSelection = getUserChoice.toLowerCase()

    const gameOptions = ["rock", "paper", "scissor"];

    const getComputerChoice = gameOptions[Math.floor(Math.random() * gameOptions.length)]

    if (!gameOptions.includes(playerSelection)) {
        console.log("Invalid choice. Please choose rock, paper, or scissors.");
        return;
    }
    // console.log("Player's choice", playerSelection)
    // console.log("Computer choice", getComputerChoice)
    if (playerSelection === "rock" && getComputerChoice === "paper") {
        console.log("You lose! Paper beats rock ")
        computersScore++;
    } else if (playerSelection === "paper" && getComputerChoice === "scissor") {
        console.log("You lose! Scissors beat paper")
        computersScore++;
    } else if (playerSelection === "scissor" && getComputerChoice === "rock") {
        console.log("You lose! Rock beats scissor")
        computersScore++;


    }
    else {
        console.log(("You won! " + playerSelection + " beats " + getComputerChoice))
        playersScore++
    }

}

for (let i = 1; i < 5; i++) {
    playGame();
}
playGame()

