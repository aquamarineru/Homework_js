const getUserChoice = (userInput) => {
    userInput = userInput.toLowerCase();
    if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors') {
        return userInput
    } else {
        console.log("Error, please type rock, paper or scissors.");
    }
}
//console.log(getUserChoice('Paper'));
//console.log(getUserChoice('fork')); 

const getComputerChoice = () => {
    const randomNum = Math.floor(Math.random() * 3)
    switch (randomNum) {
        case 0:
            return 'rock';
        case 1:
            return 'paper';
        case 2:
            return 'scissors';
            break
    }

}

//console.log(getComputerChoice());
//console.log(getComputerChoice());
//console.log(getComputerChoice());

const determineWinner = (userChoice, computerChoice) => {
    if (computerChoice === userChoice) {
        return "This game was a tie!"
    }
    if (userChoice === 'rock') {
        if (computerChoice === 'paper') {
            return 'The computer won!';
        } else {
            return 'You won!';
        }
    }
    if (userChoice === 'paper') {
        if (computerChoice === 'scissors') {
            return 'The computer won!';
        } else {
            return 'You won!';
        }
    }
    if (userChoice === 'scissors') {
        if (computerChoice === 'rock') {
            return 'The computer won!';
        } else {
            return 'You won!';
        }
    }
}

const playGame = () => {
    const userChoice = getUserChoice('scissors');
    const computerChoice = getComputerChoice();
    console.log('You threw: ' + userChoice);
    console.log('The computer threw:' + computerChoice);
};
playGame()
determineWinner()

