const bottoneVerifica = document.getElementById("bottone-verifica")
const inputText = document.getElementById("testo")

function isPari(numeroDaVerifica) {
  if (numeroDaVerifica % 2 === 0) {
    return true
  } else {
    return false
  }
}

function showAlertName() {
  window.alert("Ciao Jan")
}

function showAlertTesto(testo) {
  window.alert(testo)
}

bottoneVerifica.addEventListener("click", () => {
  let numeroDaVerificare = inputText.value
  let numeroIsPari = isPari(numeroDaVerificare)
  if (numeroIsPari === true) {
    showAlertTesto("Il numero " + numeroDaVerificare + " è pari")
  } else {
    showAlertTesto("Il numero " + numeroDaVerificare + " è dispari")
  }
})
