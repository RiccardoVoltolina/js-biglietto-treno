/* DESCRIZIONE
Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.
L'output del prezzo finale va stampato in forma umana (ovvero con massimo due decimali, per indicare i centesimi sul prezzo). Questo richiederà un minimo di ricerca nella documentazione di JS. */

/* ASSETS */

/* 
-prompt km 
-prompt età passeggiero 
-const/ let
-number
-math
-console.log
*/

/* ESECUZIONE */

/* 
- 1 Creo 2 prompt, 1 che chiede l' età e l' altro il numero di km 

- 2 creo una nuova variabile, dove moltiplico la variabile dei km * 0.21

- 3 uso if/ else per determinare se l' età è superiore a 65 anni

- 4 se è superiore, moltiplicherò il risultato x40%

- 5 creo una nuova variabile, che ha come valore il risultato di variabile km *40%100

- 6 uso if/ else per determinare se l' età è inferiore a 18 anni

- 7 se è inferiore, moltiplicherò il risultato x20%

- 8 creo una nuova variabile, che ha come valore il risultato di variabile km *20%100

- 9 se è tra 18 compreso e 65 anni compreso, utilizzerò else per dire che il risultato è uguale alla variabile dei km*0.21 

*/

/* SVOLGIMENTO */

/* prompt numero km */

const numberKm = Number (prompt ('Quanti km desideri percorrere?'));

if (isNaN (numberKm)) {
    alert('Scrivi gentilmente in caratteri numerici');
    location.reload();
}

/* prompt età */

const customerAge = Number (prompt ('Quanti anni hai?'));

if (isNaN (customerAge)) {
    alert('Scrivi gentilmente in caratteri numerici');
    location.reload();
}


/* valore biglietto senza sconti */

const noDiscountPrice = (numberKm * 0.21).toFixed (2)

console.log(noDiscountPrice);

/* determino se ha più di 65 anni o meno di 18 anni */

const discount_40 = (noDiscountPrice * 40 / 100 )

const totalDiscount_40 = (noDiscountPrice - discount_40).toFixed (2)

const discount_20 = (noDiscountPrice * 20 / 100 )

const totalDiscount_20 = (noDiscountPrice - discount_20).toFixed (2)

if (customerAge > 65) {

    console.log('complimenti, hai diritto a uno sconto del 40%. Il prezzo finale del tuo biglietto sarà di: ' + totalDiscount_40 + '$' );
    document.getElementById('discountOver').innerHTML = 'Complimenti, hai diritto a uno sconto del 40%. Il prezzo finale del tuo biglietto sarà di: ' + totalDiscount_40 + '$' 
} else if (customerAge < 18) {
    console.log('complimenti, hai diritto a uno sconto del 20%. Il prezzo finale del tuo biglietto sarà di: ' + totalDiscount_20 + '$' );
    document.getElementById('discountUnder').innerHTML = 'Complimenti, hai diritto a uno sconto del 20%. Il prezzo finale del tuo biglietto sarà di: ' + totalDiscount_20 + '$'
    console.log('Il prezzo finale del tuo biglietto è di ' + noDiscountPrice + '$');
    document.getElementById('noDiscount').innerHTML = 'Il prezzo finale del tuo biglietto è di ' + noDiscountPrice + '$'
}

document.getElementById('km').innerHTML = 'Desideri percorrere ' + numberKm + 'Km'
document.getElementById('Age').innerHTML = 'Hai una età di: ' + customerAge + ' anni'





