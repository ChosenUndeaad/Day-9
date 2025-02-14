/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato.
*/

const area = function (l1, l2) {
  const rectangleArea = l1 * l2;
  console.log(rectangleArea);
};

area(15, 25);

/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/

const crazySum = function (n1, n2) {
  if (n1 === n2) {
    return (n1 + n2) * 3;
  } else {
    return n1 + n2;
  }
};

console.log(crazySum(4, 6));
console.log(crazySum(4, 4));

/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/

const crazyDiff = function (y, x = 19) {
  if (y > 19) {
    return Math.abs(y - x) * 3;
  } else {
    return Math.abs(y - x);
  }
};

console.log(crazyDiff(8));
console.log(crazyDiff(22));

/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/

const boundary = function (n) {
  if ((n >= 20 && n <= 100) || n === 400) {
    return "Numero OK";
  } else {
    return "Numero non OK";
  }
};

console.log(boundary(98));
console.log(boundary(328));

/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/

const epify = function (stringa) {
  if (stringa.startsWith("EPICODE")) {
    return stringa;
  } else {
    return "Epicode " + stringa;
  }
};

console.log(epify("Ciao"));
console.log(epify("EPICODE"));

/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/

const check3and7 = function (posN) {
  if (posN % 3 === 0 || posN % 7 === 0) {
    console.log("Il numero è un multiplo!");
  } else {
    console.log("Il numero NON è un multiplo.");
  }
};

check3and7(40);
check3and7(21);
check3and7(7);

/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/

const reverseString = function (parola) {
  return parola.split("").reverse().join("");
};

console.log(reverseString("EPICODE"));

/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/

const upperFirst = function (w1, w2, w3) {
  const capitalize = (word) => word.charAt(0).toUpperCase() + word.slice(1);
  return capitalize(w1) + " " + capitalize(w2) + " " + capitalize(w3);
};

console.log(upperFirst("ciao", "come", "va"));

/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/

const cutString = function (stringa) {
  return stringa.slice(1, stringa.length - 1);
};

console.log(cutString("Test"));

/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/

let giveMeRandom = function (n) {
  let randomNumbers = [];
  for (let i = 0; i < n; i++) {
    randomNumbers.push(Math.floor(Math.random() * 11));
  }
  return randomNumbers;
};

console.log(giveMeRandom(6));
