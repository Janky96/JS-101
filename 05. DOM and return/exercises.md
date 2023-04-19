1. Cercare di abbellire l'HTML di Verifica pari che abbiamo fatto, applicandogli stile, mettendo colori e altro
2. Fare una funzione che presi in input 2 numeri ritorni il più piccolo

```Javascript
function numeroPiuPiccolo(numA, numB) {
  if (numA < numB) {
    return numA
  } else {
    return numB
  }
}
```

3. Fare una funzione che presi in input 3 numeri ritorni il più grande

```Javascript
function numeroPiuGrande(numA, numB, numC) {
  if (numA > numB) {
    if (numA > numC) {
      return numA
    } else {
      return numC
    }
  } else {
    if (numB > numC) {
      return numB
    } else {
      return numC
    }
  }
}
```

4. Fare una funzione che presi in input 2 numeri ritorni la differenza

```Javascript
function differenza(numA, numB) {
  return numA - numB;
}
```
