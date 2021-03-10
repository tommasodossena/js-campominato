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

// BONUS - Richiede una difficoltà all’utente che cambia il range di numeri casuali:
var difficolta;
do {
    difficolta =  parseInt(prompt("Inserisci la difficoltà: \"0\" facile | \"1\" intermedio | \"2\" difficile"));
} while ( difficolta != 0 && difficolta != 1 && difficolta != 2 );

var intervalloBombe;
switch (difficolta) {
    case 0:
        intervalloBombe = 100;
        break;

    case 1:
        intervalloBombe = 80;
        break;

    default:
        intervalloBombe = 50;
}

// 1 - Generare 16 numeri casuali tra 1 e 100 e inserirli in un array (non sono ammessi duplicati)
var bombe = [];

var random;
while ( bombe.length < 16 ) {
    random = randomNumber(1, intervalloBombe);
    if ( intoArray(bombe, random) == false ) {
        bombe.push(random);   
    }
}

// 2 - Chiedere all’utente di inserire un numero, sempre compreso tra 1 e 100, per 84 volte 
var numeri = [];

var numero;
var controllo = false;
var range = intervalloBombe - 16;

while ( numeri.length < range && controllo == false ) {

    // 3 - Il numero inserito dall'utente deve essere compreso tra 1 e 100
    do {
        numero = parseInt(prompt("Inserisci un numero da 1 a " + intervalloBombe));  
    } while ( numero <= 0 || numero > intervalloBombe  || isNaN(numero) );

    // 4 - Se il numero è presente nella lista dei numeri generati, usciamo dal ciclo
    if ( intoArray(bombe, numero) == true ) {
        controllo = true;
    // 5 - Il numero inserito dall'utente non può essere ripetuto 
    } else if ( intoArray(numeri, numero) == true ) {
        alert("Non fare il furbo, inserisci un'altro numero");
    } else {
        numeri.push(numero); 
    }
        
}

// 6 - Stampare il risultato verificando il valore dentro alla variabile controllo e comunicare il punteggio
if (controllo) {
    alert("Hai perso, riprova");
    alert("Hai ottenuto un punteggio di " + numeri.length);
    console.log("Bombe: " + bombe);
    console.log("Numeri: " + numeri);
    console.log("Punteggio: " + numeri.length);
} else {
    alert("Congratulazioni! Sei riuscito ad evitare tutte le bombe, hai vinto");
}