- Fare una funzione che prenda in input una stringa e dica se la lunghezza della stringa sia maggiore di 2
```JavaScript
function verificaLunghezzaStringa(word) {
    if(word.length > 2) {
        console.log("La string in input <" +  word + "> ha la lunghezza maggiore di 2");
    } else {
        console.log("La string in input <" +  word + "> ha la lunghezza minore o uguale di 2");
    }
}
```

---

- Fare una funzione che prenda in input una stringa e stampi l'ultima lettera della stringa
```JavaScript
function stampaUltimaLettera(word) {
    console.log(word.charAt(word.length - 1));
}
```

---

- Fare una funzione che prenda in input una stringa e stampi la prima lettera della stringa in maiuscolo
```JavaScript
function stampaPrimaLetteraInMaiuscolo(word) {
    console.log(word.charAt(0).toUpperCase());
}
```

---

- Fare una funzione che prenda in input una stringa e verifichi se la stringa contiene spazi all'inizio, alla fine, o ad entrambi
```JavaScript
function verificaContieneSpaziInizioOFine(word) {
    if(word.trim().length === word.length) {
        console.log("La stringa contiene spazi all'inizio o alla fine");
    } else {
        console.log("La stringa non contiene spazi all'inizio o alla fine");
    }
}
```