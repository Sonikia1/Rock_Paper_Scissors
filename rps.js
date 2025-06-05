const rockBtn = document.getElementById("rock")
const paperBtn = document.getElementById("paper")
const scissorsBtn = document.getElementById("scissors")

let compHand = null;
let playerHand = null;
let randomNum = null;

let tieCounter = null;
let playerWinCounter = null;
let CompWinCounter = null;

  rockBtn.addEventListener("click", function() {
    playerHand = "R"
    randomHand()
    winChecker()
  })

  paperBtn.addEventListener("click", function() {
    playerHand = "P"
    randomHand()
    winChecker()
  })

  scissorsBtn.addEventListener("click", function() {
    playerHand = "S"
    randomHand()
    winChecker()
  })



function randomHand(){
  randomNum = Math.random()
  console.log(randomNum)
  if (randomNum < 1/3) {
    compHand = "R"
  } else if (randomNum >= 1/3 && randomNum < 2/3) {
    compHand = "P"
  } else if (randomNum >= 2/3) {
    compHand = "S"
  }
  console.log(compHand)
}


function winChecker() {
  if (playerHand == compHand) {
    alert("It was a tie.");
    tieCounter += 1;
    document.getElementById("ties").textContent = `Ties: ${tieCounter}` 
  }
  else if (playerHand == "R" && compHand == "S"){
    alert("You have won.");
    playerWinCounter += 1;
    document.getElementById("Wins").textContent = `Wins: ${playerWinCounter}` 
  } else if (playerHand == "R" && compHand == "P") {
    alert("The Computer has won.")
    CompWinCounter += 1
    document.getElementById("Losses").textContent = `Losses: ${CompWinCounter}`
  } else if (playerHand == "P" && compHand == "S"){
      alert("The Computer has won.")
      CompWinCounter += 1
      document.getElementById("Losses").textContent = `Losses: ${CompWinCounter}`
  } else if (playerHand == "P" && compHand == "R") {
      alert("You have won.")
      playerWinCounter += 1;
      document.getElementById("Wins").textContent = `Wins: ${playerWinCounter}` 
  } else if (playerHand == "S" && compHand == "R") {
      alert("The Computer has won.")
      CompWinCounter += 1
      document.getElementById("Losses").textContent = `Losses: ${CompWinCounter}`
  } else if (playerHand == "S" && compHand == "P") {
      alert("You have won.")
      playerWinCounter += 1;
      document.getElementById("Wins").textContent = `Wins: ${playerWinCounter}` 
  }

}





