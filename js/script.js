/* 
ESERCIZIO CAMPO MINATO:
Il computer deve generare 16 numeri casuali tra 1 e 100.
I numeri non possono essere duplicati.
In seguito deve chiedere all’utente (100 - 16) volte di inserire un numero alla volta, sempre compreso tra 1 e 100.
L’utente non può inserire più volte lo stesso numero.
Se il numero è presente nella lista dei numeri generati, la partita termina, altrimenti si continua chiedendo all’utente un altro numero.
La partita termina quando il giocatore inserisce un numero “vietato” o raggiunge il numero massimo possibile di numeri consentiti.
Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito.

BONUS: (da fare solo se funziona tutto il resto)
all’inizio il software richiede anche una difficoltà all’utente che cambia il range di numeri casuali:
con difficoltà 0 => tra 1 e 100
con difficoltà 1 => tra 1 e 80
con difficoltà 2 => tra 1 e 50
*/

// FUNZIONI 

function randomNumber(min , max) {
    var random = Math.floor(Math.random() * (max - min + 1)) + min;
    return random;
}

function intoArray(array, elemento) {
    var i = 0;
    while ( i < array.length ) {
        if ( array[i] == elemento) {
            return true;
        }
        i++;
    }
    return false;
}

// 1 - Generare 16 numeri casuali tra 1 e 100 e inserirli in un array (non sono ammessi duplicati)
var bombe = [];

var random;
while ( bombe.length < 16 ) {
    random = randomNumber(1, 100);
    if ( bombe.indexOf(random) === -1 ) {
        bombe.push(random);   
    }
}
console.log(bombe);

// 2 - Chiedere all’utente di inserire un numero, sempre compreso tra 1 e 100, per 84 volte 
var numeri = [];

var numero;
var controllo = false;

while ( numeri.length < 84 && controllo == false ) {

    // 3 - Il numero inserito dall'utente non può essere ripetuto
    do {
        numero = parseInt(prompt("Inserisci un numero da 1 a 100"));  
    } while ( numero <= 0 || numero > 100 );

    if ( numeri.indexOf(numero) === -1 ) {
        numeri.push(numero); 
        
        // 4 - Se il numero è presente nella lista dei numeri generati, la partita termina
        controllo = intoArray(bombe, numero);
        if (controllo) {
            alert("Hai perso, riprova");
        }

    }
}
console.log(numeri);

if ( numeri.length == 84 ) {
    alert("Congratulazioni! Sei riuscito ad evitare tutte le bombe, hai vinto");
}

// 5 - Comunicare il punteggio, ossia il numero di volte che l’utente ha inserito un numero consentito
var punteggio = alert("Hai ottenuto un punteggio di " + numeri.length + " su 84");