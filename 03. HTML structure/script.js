// 1. Fare una funzione che prende in input una stringa e stampi la lunghezza della stringa X

// 2. Fare una funzione che prenda in input una stringa e un intero(numero), 
// verificare che la lunghezza della stringa sia più piccola di quel numero, di conseguenza fare due stampe diverse in base alla logica

function verificaLungParola(parola, lunghezzaMax) {
    if(parola.length < lunghezzaMax) {
        console.log("La lunghezza della parola è verificata");
    } else {
        console.log("La lunghezza della parola non è verificata")
    }
}

// verificaLungParola("Ciaoooo", 3);


// 3. Fare una funzione che data una stringa la trasformi tutto in maiuscolo
function trasformaInMaiuscolo(parola) {
    console.log(parola.toUpperCase());
}


// 4. Fare una funzione che data una stringa la trasformi tutto in minuscolo
function trasformaInMinuscolo(parola) {
    console.log(parola.LowerCase());
}


// 5. Fare una funzione che data una stringa trasformi in maiuscolo solo la prima lettera
function primaLetteraMaiuscolo(word) {
    let iniziale = word.charAt(0).toUpperCase();
    let restoDelNome = word.substring(1, string.length);
    console.log(iniziale + restoDelNome);
}



// 6. Fare una funzione che data una stringa trasformi in maiuscolo solo l'ultima lettera
function ultimaMaiuscola(string) {
    if(typeof string !== "string") {
        console.log("Input non valido");
    } else {
        let ultimaLettera = string.charAt(string.length - 1).toUpperCase();
        let restoParola = string.substring(0, string.length - 1);
        console.log(restoParola + ultimaLettera);
    }
}
ultimaMaiuscola("cat")


// 7. Fare una funzione che data una stringa la trasformi tutto in maiuscolo, e che se riceve una stringa con gli spazi all'inizio e alla fine, li tolga

function tuttoMaiuscoloTrimmed(word) {
    console.log(word.toUpperCase().trim());
}