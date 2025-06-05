const rockBtn = document.getElementById("rock")
const paperBtn = document.getElementById("paper")
const scissorsBtn = document.getElementById("scissors")

let compHand = null
let playerHand = null
let randomNum = null

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
  } else if (randomNum >= 1/3 || randomNum < 2/3) {
    compHand = "P"
  } else {
    compHand = "S"
  }
  console.log(compHand)
}


function winChecker() {
  if (playerHand == compHand) {
    alert("It was a tie.")
  }
  else if (playerHand == "R" && compHand == "S"){
    alert("You have won.")
  } else if (playerHand == "R" && compHand == "P") {
    alert("The Computer has won.")
  } else if (playerHand == "P" && compHand == "S"){
      alert("The Computer has won.")
  } else if (playerHand == "P" && compHand == "R") {
      alert("You have won.")
  } else if (playerHand == "S" && compHand == "R") {
      alert("The Computer has won.")
  } else if (playerHand == "S" && compHand == "P") {
      alert("You have won.")
  }

}


