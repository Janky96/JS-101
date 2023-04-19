const numA = document.getElementById("numberA")
const numB = document.getElementById("numberB")
const result = document.getElementById("result")
const equals = document.getElementById("equals")

function somma(numA, numB) {
  return Number(numA) + Number(numB)
}

equals.addEventListener("click", () => {
  result.innerText = somma(numA.value, numB.value)
})
