const gameScreen = document.querySelector(".gameScreen");
const menuScreen = document.querySelector(".menuScreen");

const playersSection = document.getElementById("players");

const namePlayer1 = document.getElementById("inputName1");
const namePlayer2 = document.getElementById("inputName2");


const btnStart = document
  .getElementById("btnStart")
  .addEventListener("click", function () {
    gameScreen.style.setProperty("display", "flex");
    menuScreen.style.setProperty("display", "none");

    const playersParagraph = document.querySelector("#players > p");
    

    playersParagraph.innerText =
      "Jogador 1: " + namePlayer1.value + "\n\nJogador 2: " + namePlayer2.value;


    currentPlayerParagraph.innerText =
      "Jogador da vez: " + namePlayer1.value + "- X" ;

    playersSection.append(playersParagraph);
  });

const currentPlayerSection = document.getElementById("currentPlayer");

const currentPlayerParagraph = document.querySelector("#currentPlayer > p");

const squares = document.querySelectorAll(".square");

// arrays to get the square ID of X and O
let markedX = [];
let markedO = [];

let draw = 0

squares.forEach(function (square) {
  square.addEventListener("click", function () {
    square.setAttribute("disabled", square.disabled);
    draw++

    const squaresContainer = document.querySelector(".squaresContainer");
    if (squaresContainer.dataset.value === "O") {
      square.innerText = "O";
      squaresContainer.dataset.value = "X";
      square.classList.add("clicked-O");
      currentPlayerParagraph.innerText =
        "Jogador da vez: " + namePlayer1.value + "- X" ;

      // storage the IDs
      markedO.push(Number(square.dataset.id));
      console.log("Quadrados do O - " + markedO);
    } else {
      square.innerText = "X";
      squaresContainer.dataset.value = "O";
      square.classList.add("clicked-X");
      currentPlayerParagraph.innerText =
        "Jogador da vez: " + namePlayer2.value + "- O" ;

      // storage the IDs
      markedX.push(Number(square.dataset.id));
      console.log("Quadrados do X - " + markedX);
    }

    const winPossibilities = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
      [1, 4, 7],
      [2, 5, 8],
      [3, 6, 9],
      [1, 5, 9],
      [3, 5, 7],
    ];

    winPossibilities.forEach(function (possibilitiesArray) {
      let Xindex = 0;
      let Oindex = 0;

      possibilitiesArray.forEach(function (possibilitiesEl) {
        if (markedX.includes(possibilitiesEl)) {
          Xindex++;
          if (Xindex === 3) {
            draw = 0
            currentPlayerParagraph.innerText = namePlayer1.value + " venceu!!";
            squaresContainer.dataset.value = "X"; 
            squares.forEach(function (square) {
              square.setAttribute("disabled", squares.disabled);
              if (possibilitiesArray.includes(Number(square.dataset.id))) {
                square.classList.add("squareWinner");
              }
            });
          }
        }
        if (markedO.includes(possibilitiesEl)) {
          Oindex++;
          if (Oindex === 3) {
            draw = 0
            currentPlayerParagraph.innerText = namePlayer2.value + " venceu!!";
            squares.forEach(function (square) {
              square.setAttribute("disabled", squares.disabled);
              if (possibilitiesArray.includes(Number(square.dataset.id))) {
                square.classList.add("squareWinner");
              }
            });
          }
        }
      });
    });
    if(draw > 8 && !square.classList.contains("squareWinner")){
      currentPlayerParagraph.innerText = "EMPATE! Por favor clique no botão reiniciar para jogar novamente."
      squares.forEach(function (square) {
        console.log("draw " + draw)
      square.classList.add("drawGame")
      })
      squaresContainer.dataset.value = "X"; 
      draw = 0
    }
    
  });
});

function gameReset() {
  squares.forEach(function (square) {
    square.removeAttribute("disabled");
    square.innerText = "";
    square.classList.remove("clicked-O", "clicked-X", "squareWinner", "drawGame");
    draw = 0
  });

  gameScreen.style.setProperty("display", "none");
  menuScreen.style.setProperty("display", "flex");

  markedX = [];
  markedO = [];
}
const btnReset = document.getElementById("btnReset");
btnReset.addEventListener("click", gameReset);

