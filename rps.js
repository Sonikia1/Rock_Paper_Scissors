
const rockBtn = document.getElementById("rock")
const paperBtn = document.getElementById("paper")
const scissorsBtn = document.getElementById("scissors")
const autoplayBtn = document.getElementById("auto-play")

const resetBtn = document.getElementById("reset")
const clearBtn = document.getElementById("clear")

const lifetimeWinsDiv = document.getElementById("lifetime-wins")
const lifetimeTiesDiv = document.getElementById("lifetime-ties")
const lifetimeLossesDiv = document.getElementById("lifetime-losses")

let compHand = null;
let playerHand = null;
let randomNum = null;

let tieCounter = 0;
let playerWinCounter = 0;
let CompWinCounter = 0;



let lifetimeWins = parseInt(localStorage.getItem("wins"))
let lifetimeTies = parseInt(localStorage.getItem("ties"))
let lifetimeLosses = parseInt(localStorage.getItem("losses"))

console.log(lifetimeWins)
console.log(typeof(lifetimeWins))
//if (typeof(localStorage.getItem("wins")) == undefined || typeof(localStorage.getItem("losses")) == undefined || typeof(localStorage.getItem("ties")) == undefined)

if (Number.isNaN(lifetimeWins) || Number.isNaN(lifetimeLosses) || Number.isNaN(lifetimeTies) )  {
  localStorage.setItem("wins", playerWinCounter)
  localStorage.setItem("losses", CompWinCounter)
  localStorage.setItem("ties", tieCounter)
  lifetimeWinsDiv.textContent = `Lifetime Wins: N/A`
  lifetimeTiesDiv.textContent = `Lifetime Ties: N/A`
  lifetimeLossesDiv.textContent = `Lifetime Losses: N/A`
  lifetimeWins = 0
  lifetimeTies = 0
  lifetimeLosses = 0

} else {
    localStorage.setItem("wins", lifetimeWins)
    localStorage.setItem("losses", lifetimeLosses)
    localStorage.setItem("ties", lifetimeTies)
    lifetimeWinsDiv.textContent = `Lifetime Wins: ${lifetimeWins}`
    lifetimeTiesDiv.textContent = `Lifetime Ties: ${lifetimeTies}`
    lifetimeLossesDiv.textContent = `Lifetime Losses: ${lifetimeLosses}`
}






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

  clearBtn.addEventListener("click", function() {
    console.log(temp)
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
    console.log(localStorage)
    localStorage.clear()
    location.reload()
    lifetimeWinsDiv.textContent = `Lifetime Wins: N/A`
    lifetimeTiesDiv.textContent = `Lifetime Ties: N/A`
    lifetimeLossesDiv.textContent = `Lifetime Losses: N/A`


  })


  resetBtn.addEventListener("click", function() {
    console.log(temp)
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
    lifetimeTies += 1
    console.log(`LifetimTies in winChecker: ${lifetimeTies}`)
    document.getElementById("ties").textContent = `Ties: ${tieCounter}` 
    localStorage.setItem("ties", lifetimeTies)
    lifetimeTiesDiv.textContent = `Lifetime Ties: ${lifetimeTies}`
  }
  else if (playerHand == "R" && compHand == "S"){
    //("You have won.");
    playerWinCounter += 1;
    lifetimeWins += 1
    localStorage.setItem("wins", lifetimeWins)
    document.getElementById("Wins").textContent = `Wins: ${playerWinCounter}`
    lifetimeWinsDiv.textContent = `Lifetime Wins: ${lifetimeWins}`
  } else if (playerHand == "R" && compHand == "P") {
    //("The Computer has won.")
    CompWinCounter += 1
    lifetimeLosses += 1
    localStorage.setItem("losses", lifetimeLosses)
    lifetimeLossesDiv.textContent = `Lifetime Losses: ${lifetimeLosses}`
    document.getElementById("Losses").textContent = `Losses: ${CompWinCounter}`
  } else if (playerHand == "P" && compHand == "S"){
      //("The Computer has won.")
      CompWinCounter += 1
      lifetimeLosses +=1
      document.getElementById("Losses").textContent = `Losses: ${CompWinCounter}`
      localStorage.setItem("losses", lifetimeLosses)
      lifetimeLossesDiv.textContent = `Lifetime Losses: ${lifetimeLosses}`
  } else if (playerHand == "P" && compHand == "R") {
      //("You have won.")
      playerWinCounter += 1;
      lifetimeWins += 1
      localStorage.setItem("wins", lifetimeWins)
      document.getElementById("Wins").textContent = `Wins: ${playerWinCounter}`
      lifetimeWinsDiv.textContent = `Lifetime Wins: ${lifetimeWins}`
  } else if (playerHand == "S" && compHand == "R") {
      //("The Computer has won.")
      CompWinCounter += 1
      lifetimeLosses += 1
      document.getElementById("Losses").textContent = `Losses: ${CompWinCounter}`
      localStorage.setItem("losses", lifetimeLosses)
      lifetimeLossesDiv.textContent = `Lifetime Losses: ${lifetimeLosses}`
  } else if (playerHand == "S" && compHand == "P") {
      //("You have won.")
      playerWinCounter += 1;
      lifetimeWins += 1
      document.getElementById("Wins").textContent = `Wins: ${playerWinCounter}`
      localStorage.setItem("wins", lifetimeWins)
      lifetimeWinsDiv.textContent = `Lifetime Wins: ${lifetimeWins}`
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



