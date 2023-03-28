// let text = "Ciao";
// let nome = "Alessandro";

// console.log(nome.substring(4, 10));

// let iniziale = nome.charAt(4).toUpperCase();
// let restoDelNome = nome.substring(5, 10);

// console.log(iniziale + restoDelNome);



// let testo = "                          Hello there, how are you?    ";
// console.log(testo);
// console.log(testo.trim());


function verificaPassword(password) {
    if(password.length < 8) {
        console.log("Per favore inserisci una psw più di 8 caratteri");
    } else if(isNaN(password.charAt(0))) {
        console.log("La password deve iniziare con un numero");
    } else {
        console.log("La password va bene")
    }
}

verificaPassword("1laawd")