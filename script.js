
const gameScreen = document.querySelector(".gameScreen")
const menuScreen = document.querySelector(".menuScreen")

const playersSection = document.getElementById("players")
  
const namePlayer1 = document.getElementById("inputName1")
const namePlayer2 = document.getElementById("inputName2")

const btnStart = document.getElementById("btnStart").addEventListener("click", function () {

  gameScreen.style.setProperty("display", "flex")
  menuScreen.style.setProperty("display", "none")
  
  const playersParagraph = document.querySelector("#players > p")
  playersParagraph.innerText = "Jogador 1: " + namePlayer1.value + "\nJogador 2: " + namePlayer2.value
  
  currentPlayerParagraph.innerText = "Jogador da vez: " + namePlayer1.value
  
  playersSection.append(playersParagraph)

})

const btnReset = document.getElementById("btnReset")
btnReset.addEventListener('click', function() {
  squares.forEach(function (square) {
    square.removeAttribute('disabled')
    square.innerText = ''
    square.classList.remove('clicked-O', 'clicked-X')
  })
})

  const currentPlayerSection = document.getElementById("currentPlayer")

  const currentPlayerParagraph = document.querySelector("#currentPlayer > p")

  const squares = document.querySelectorAll(".square")

  squares.forEach(function (square) {
    square.addEventListener("click", function () {
      square.setAttribute('disabled', square.disabled)
      const squaresContainer = document.querySelector(".squaresContainer")

      if(squaresContainer.dataset.value === "O") {
        square.innerText = "O"
        squaresContainer.dataset.value = "X"
        square.classList.add("clicked-O")

        currentPlayerParagraph.innerText = "Jogador da vez: " + namePlayer1.value
      }
      else {
        square.innerText = "X"
        squaresContainer.dataset.value = "O"
        square.classList.add("clicked-X")
        
        currentPlayerParagraph.innerText = "Jogador da vez: " + namePlayer2.value
      }
    })
  })

  // chek if win or lose and draw -> disabled and dataset.id or id= (possibilidades)  