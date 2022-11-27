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
      "Jogador 1: " + namePlayer1.value + "\nJogador 2: " + namePlayer2.value;

    currentPlayerParagraph.innerText =
      "Jogador da vez: " + namePlayer1.value + "- X";

    playersSection.append(playersParagraph);
  });

const currentPlayerSection = document.getElementById("currentPlayer");

const currentPlayerParagraph = document.querySelector("#currentPlayer > p");

const squares = document.querySelectorAll(".square");

squares.forEach(function (square) {
  square.addEventListener("click", function () {
    square.setAttribute("disabled", square.disabled);

    const squaresContainer = document.querySelector(".squaresContainer");
    //--------------------------------------------------------------------------------

    if (squaresContainer.dataset.value === "O") {
      square.innerText = "O";
      squaresContainer.dataset.value = "X";
      square.classList.add("clicked-O");
      // storage the IDs

      currentPlayerParagraph.innerText =
        "Jogador da vez: " + namePlayer1.value + "- X";
    } else {
      square.innerText = "X";
      squaresContainer.dataset.value = "O";
      square.classList.add("clicked-X");
      // storage the IDs

      currentPlayerParagraph.innerText =
        "Jogador da vez: " + namePlayer2.value + "- O";
    }

    // chek if win or lose and draw -> disabled and dataset.id or id= (possibilidades)
    // possibilidades - dataset.value = 123 / 456 / 789 | 147 / 258 / 469 | 159 / 357
    // I need to storage the ID individual in O and X
    // const winPossiblities = [123, 456, 789, 147, 258, 469, 159, 357];
    // let dataID = +square.dataset.id;
    //Maybe use for?!
  });
});

const btnReset = document.getElementById("btnReset");
btnReset.addEventListener("click", function () {
  squares.forEach(function (square) {
    square.removeAttribute("disabled");
    square.innerText = "";
    square.classList.remove("clicked-O", "clicked-X");

    gameScreen.style.setProperty("display", "none");
    menuScreen.style.setProperty("display", "flex");
  });
});
