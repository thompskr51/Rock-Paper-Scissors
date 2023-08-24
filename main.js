const getUserChoice = function (userInput) {
  userInput = userInput.toLowerCase();
  if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors') {
    console.log(userInput);
  } else {
  console.log('Invalid selection!');
  }
};

const getComputerChoice = function () {
  let randomNumber = Math.floor(Math.random() * 3);
  if (randomNumber === 0) {
    console.log('paper');
  } else if (randomNumber === 1) {
    console.log('rock');
  } else if (randomNumber === 2) {
    console.log('scissors');
  }
    };

const determineWinner = function (userChoice, computerChoice) {
if (userChoice === computerChoice) {
console.log('Tie!')
}
if (userChoice === 'rock') {
  if (computerChoice === 'paper') {
    console.log('Computer wins!');
  } else {
    console.log('User wins!');
  }
}

  if (userChoice === 'paper') {
  if (computerChoice === 'scissors') {
    console.log('Computer wins!');
  } else {
    console.log('User wins!');
  }
}

  if (userChoice === 'scissors') {
   if (computerChoice === 'rock') {
     console.log('Computer wins!');
   } else {
     console.log('User wins!');
   }
 }
};

var playGame = function () {
  var userChoice = getUserChoice('rock');
  var computerChoice = getComputerChoice();
  console.log(`User threw ${userChoice}!`);
  console.log(`Computer threw ${computerChoice}!`);
};

  playGame(determineWinner (userChoice, computerChoice));
