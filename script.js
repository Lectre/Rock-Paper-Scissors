function getComputerChoice(){
  const choices = ["Rock", "Paper", "Scissors"];
  const randomIndex = Math.floor(Math.random() * 3);
  return choices[randomIndex];
}

let playerScore = 0;
let computerScore = 0;

function playRound(playerSelection, computerSelection){
  if (
    (playerSelection === "rock" && computerSelection === "Scissors") ||
    (playerSelection === "paper" && computerSelection === "Rock") ||
    (playerSelection === "scissors" && computerSelection === "Paper")
  )   {
    return `You Win! ${playerSelection} beats ${computerSelection}`;
  }   else if (
    (playerSelection === "scissors" && computerSelection === "Rock") ||
    (playerSelection === "rock" && computerSelection === "Paper") ||
    (playerSelection === "paper" && computerSelection === "Scissors")
  )   {
    return `You Lose! ${computerSelection} beats ${playerSelection}`;
  }   else {
    return "It's a Tie!";
  }
}

function displayResult(result, computerChoice){
  let resultDisplay = document.getElementById("resultDisplay");
  let computerChoiceDisplay = document.getElementById("computerChoiceDisplay");
  resultDisplay.textContent = result;
  computerChoiceDisplay.textContent = `Computer Chose: ${computerChoice}`;
}
function updateScoreDisplay(){
  let scoreDisplay = document.getElementById("scoreDisplay");
  scoreDisplay.textContent = `Player: ${playerScore}, Computer: ${computerScore}`;

}
function checkScore(){
  if (playerScore >= 5){
    displayResult("Player Wins the Game!")
  }
  else if (computerScore >= 5){
    displayResult("Computer Wins the Game!");
  }
}


function handleClick(playerSelection){
  const computerChoice = getComputerChoice();
  const result = playRound(playerSelection, computerChoice);
  console.log(`Computer chose: ${computerChoice}`);
  if (result.includes('You Win!')){
    playerScore++;
  }
  else if (result.includes('You Lose!')){
    computerScore++;
  }
  displayResult(result, computerChoice);
  updateScoreDisplay();
  checkScore();
  
}

function resetGame(){
  playerScore = 0;
  computerScore = 0;
  updateScoreDisplay();
  
}

function clearDisplay(){
  let clearcomcho = document.getElementById("computerChoiceDisplay");
  clearcomcho.textContent = "";
  let clearresdis = document.getElementById("resultDisplay");
  clearresdis.textContent = "";
}

document.getElementById("rockButton").addEventListener("click", function(){
  handleClick("rock");
});
document.getElementById("paperButton").addEventListener("click", function(){
  handleClick("paper");
});
document.getElementById("scissorsButton").addEventListener("click", function(){
  handleClick("scissors");
});
document.getElementById("restartButton").addEventListener("click",function(){
  resetGame();
  clearDisplay("computeChoiceDisplay");
  clearDisplay("resultDisplay");
});
