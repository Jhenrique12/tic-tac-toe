
document.querySelectorAll(".btns").forEach(function (btn) {
  btn.addEventListener("click", function () {
    const XorO = "X"
    btn.setAttribute('disabled', btn.disabled)
    btn.innerText = "Marcado " + XorO
  })
})

const gameScreen = document.querySelector(".game")
const menuScreen = document.querySelector(".menu")

const btnStart = document.getElementById("btnStart").addEventListener("click", function () {
  gameScreen.style.setProperty("display", "block")
  menuScreen.style.setProperty("display", "none")

  const section = document.getElementById("players")
  
  const name1 = document.getElementById("name1")
  const name2 = document.getElementById("name2")

  const divname1 = document.createElement("div")
  divname1.innerText = "Jogador 1: " + name1.value
  const divname2 = document.createElement("div")
  divname2.innerText = "Jogador 2: " + name2.value

  section.append(divname1, divname2)
  
})