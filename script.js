
  function getComputerChoice() {
    const choices = ["Rock", "Paper", "Scissors"];
    const randomIndex = Math.floor(Math.random() * 3);
    return choices[randomIndex];
  }
  
  let playerScore = 0;
  let computerScore = 0;
  
  function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
  
    if (
      (playerSelection === "rock" && computerSelection === "Scissors") ||
      (playerSelection === "paper" && computerSelection === "Rock") ||
      (playerSelection === "scissors" && computerSelection === "Paper")
    ) {
      return `You Win! ${playerSelection} beats ${computerSelection}`;
    } else if (
      (playerSelection === "scissors" && computerSelection === "Rock") ||
      (playerSelection === "rock" && computerSelection === "Paper") ||
      (playerSelection === "paper" && computerSelection === "Scissors")
    ) {
      return `You Lose! ${computerSelection} beats ${playerSelection}`;
    } else {
      return "It's a Tie!";
    }
  }
  
  // Play 5 times
  for (let i = 0; i < 5; i++) {
    const computerChoice = getComputerChoice();
    const playerChoice = prompt("Enter Rock, Paper, or Scissors:");
    console.log("Player chose: ", playerChoice);
    const result = playRound(playerChoice, computerChoice);
  
    console.log(`Computer chose: ${computerChoice}`);
    if (result.includes('You Win!')) {
      playerScore++;
    } else if (result.includes('You Lose!')) {
      computerScore++;
    }
    console.log(result);
    console.log(`Player Score: ${playerScore}`);
    console.log(`Computer Score: ${computerScore}`);
    if(playerScore>computerScore){
      console.log("Player Win!");
    }
    else if (playerScore<computerScore){
      console.log("Computer Win!");
    }
    else{
      console.log("It's a Tie!")
    }
  }
  