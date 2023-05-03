const addButton = document.getElementById("add-button")
const resetButton = document.getElementById("reset-button")
const contatore = document.getElementById("contatore")

addButton.addEventListener("click", () => {
  let numeroNuovo = Number(contatore.innerText) + 1
  contatore.innerText = numeroNuovo
})

resetButton.addEventListener("click", () => {
  contatore.innerText = 0
})
