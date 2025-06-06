
const rockBtn = document.getElementById("rock")
const paperBtn = document.getElementById("paper")
const scissorsBtn = document.getElementById("scissors")
const autoplayBtn = document.getElementById("auto-play")

const resetBtn = document.getElementById("reset")

let compHand = null;
let playerHand = null;
let randomNum = null;

let tieCounter = null;
let playerWinCounter = null;
let CompWinCounter = null;

let playInterval = null

let temp = 0

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
  });

  autoplayBtn.addEventListener("click", function() {
    console.log(`temp: ${temp}`)
    if (temp === 0) {
      temp +=1
      playInterval = setInterval(autoPlay, 1000)
    }
  });


  resetBtn.addEventListener("click", function() {
    if (temp > 0) {
      clearInterval(playInterval)
      temp = 0
      tieCounter = 0
      playerWinCounter = 0
      CompWinCounter = 0
      document.getElementById("ties").textContent = "Ties: N/A"
      document.getElementById("Wins").textContent = "Wins: N/A"
      document.getElementById("Losses").textContent = "Losses: N/A"
      document.getElementById("your-choice").textContent = ``
      document.getElementById("comp-choice").textContent = ``

    }
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
  console.log(`CompHand: ${compHand}`)
}

function playerRandomHand(){
  randomNum = Math.random()
  console.log(randomNum)
  if (randomNum < 1/3) {
    playerHand = "R"
  } else if (randomNum >= 1/3 && randomNum < 2/3) {
    playerHand = "P"
  } else if (randomNum >= 2/3) {
    playerHand = "S"
  }
  console.log(`playerHand: ${playerHand}`)
}


function winChecker() {
  if (playerHand == compHand) {
    //("It was a tie.");
    tieCounter += 1;
    document.getElementById("ties").textContent = `Ties: ${tieCounter}` 
  }
  else if (playerHand == "R" && compHand == "S"){
    //("You have won.");
    playerWinCounter += 1;
    document.getElementById("Wins").textContent = `Wins: ${playerWinCounter}` 
  } else if (playerHand == "R" && compHand == "P") {
    //("The Computer has won.")
    CompWinCounter += 1
    document.getElementById("Losses").textContent = `Losses: ${CompWinCounter}`
  } else if (playerHand == "P" && compHand == "S"){
      //("The Computer has won.")
      CompWinCounter += 1
      document.getElementById("Losses").textContent = `Losses: ${CompWinCounter}`
  } else if (playerHand == "P" && compHand == "R") {
      //("You have won.")
      playerWinCounter += 1;
      document.getElementById("Wins").textContent = `Wins: ${playerWinCounter}` 
  } else if (playerHand == "S" && compHand == "R") {
      //("The Computer has won.")
      CompWinCounter += 1
      document.getElementById("Losses").textContent = `Losses: ${CompWinCounter}`
  } else if (playerHand == "S" && compHand == "P") {
      //("You have won.")
      playerWinCounter += 1;
      document.getElementById("Wins").textContent = `Wins: ${playerWinCounter}` 
  }

  document.getElementById("your-choice").textContent = `You: ${playerHand}`
  document.getElementById("comp-choice").textContent = `Computer: ${compHand}`

}


function autoPlay() {
  console.log("here");
    temp +=1
    randomHand();
    playerRandomHand()
    winChecker()
  

}




