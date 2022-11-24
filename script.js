
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

  const name1 = getElementById("name1")
  const name2 = getElementById("name2")
  const sectionPlayers = getElementById("players")

  const divname1 = document.createElement("div")
  const divname2 = document.createElement("div")

  divname1.appendChild(name1.value)
  divname2.appendChild(name2.value)

  sectionPlayers.append(divname1, divname2)
})