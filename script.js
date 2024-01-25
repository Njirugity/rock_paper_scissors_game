// users picks either rock papers or scissors and his input is stored in a variable
const usersInput = prompt("Please choose either rock, paper scissor");

// Provide options (array stored in a a variable)for the program to pick
const gameOptions = ["rock", "paper", "scissor"];
// The program will pick a random word after the user inputs their choice
const randomPick = gameOptions[Math.floor(Math.random() * gameOptions.length)]

// Compare the users input with the programs choice
function winner() {
    if (gameOptions === randomPick) {
        return 'draw'
    } else 'you win'

}
console.log(winner());
// Rules paper beats rock, rock beats scissors, scissors beats paper