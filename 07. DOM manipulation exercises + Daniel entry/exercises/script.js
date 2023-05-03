const buttonCounter = document.getElementById("button-counter")
const counter = document.getElementById("counter-text")
const buttonReset = document.getElementById("button-reset")

buttonCounter.addEventListener("click", () => {
  let number = +counter.innerText
  number++
  counter.innerText = number
})

buttonReset.addEventListener("click", () => {
  counter.innerText = 0
})
