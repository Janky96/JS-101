- Funzione di somma, non usiamo più le stampe, ma iniziamo ad usare il ritorno "return"

```JavaScript
function somma(numA, numB) {
  return numA + numB
}
```

- Funzione che verifichi se un mero è pari, usando il ritorno di booleani

```JavaScript
function isPari(numeroDaVerifica) {
  if (numeroDaVerifica % 2 === 0) {
    return true
  } else {
    return false
  }
}
```

- Funzione che richiama un'altra funzione

```JavaScript
function verificaPari(numeroDaVerifica) {
  let risultatoIsPari = isPari(numeroDaVerifica)
  if (risultatoIsPari === true) {
    console.log("Il numero è pari")
  } else {
    console.log("Il numero è dispari")
  }
}
```

- Esempio di come mettere in variabili elementi di HTML e poi poterci lavorare

```JavaScript
const bottoneVerifica = document.getElementById("bottone-verifica")
const inputText = document.getElementById("testo")

bottoneVerifica.addEventListener("click", () => {
  let numeroDaVerificare = inputText.value
  let numeroIsPari = isPari(numeroDaVerificare)
  if (numeroIsPari === true) {
    showAlertTesto("Il numero " + numeroDaVerificare + " è pari")
  } else {
    showAlertTesto("Il numero " + numeroDaVerificare + " è dispari")
  }
})
```
