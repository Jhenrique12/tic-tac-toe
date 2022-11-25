
document.querySelectorAll(".square").forEach(function (square) {
  square.addEventListener("click", function () {
    square.setAttribute('disabled', square.disabled)
    
    const squaresContainer = document.querySelector(".squaresContainer")

    if(squaresContainer.dataset.value === "O") {
      square.innerText = "O"
      squaresContainer.dataset.value = "X"
      square.classList.add("clicked-O")

    }
    else {
      square.innerText = "X"
      squaresContainer.dataset.value = "O"
      square.classList.add("clicked-X")

    }
  })
})

const gameScreen = document.querySelector(".gameScreen")
const menuScreen = document.querySelector(".menuScreen")

const btnStart = document.getElementById("btnStart").addEventListener("click", function () {
  gameScreen.style.setProperty("display", "flex")
  menuScreen.style.setProperty("display", "none")

  const section = document.getElementById("players")
  
  const namePlayer1 = document.getElementById("inputName1")
  const namePlayer2 = document.getElementById("inputName2")

  const playersParagraph = document.querySelector("#players > p")
  playersParagraph.innerText = "Jogador 1: " + namePlayer1.value + "\nJogador 2: " + namePlayer2.value
  

  section.append(playersParagraph)
  
})