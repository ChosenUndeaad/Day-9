// Esercizi aggiuntivi (facoltativi) per D4

/* EXTRA 1
 Scrivi una funzione chiamata "checkArray" che riceve un array di numeri casuali (creati con la funzione "giveMeRandom") e per ogni elemento stampa in console
 se il suo valore è maggiore di 5 o no.
 La funzione deve inoltre ritornare la somma di tutti i valori maggiori di 5.
*/

giveMeRandom = function (n) {
  let randomNumbers = [];
  for (let i = 0; i < n; i++) {
    randomNumbers.push(Math.floor(Math.random() * 11));
  }
  return randomNumbers;
};

console.log(giveMeRandom(6));

let numbers = giveMeRandom(5);

console.log(numbers);

const checkArray = function (numberArray) {
  let count = 0;

  for (let i = 0; i < numberArray.length; i++) {
    if (numberArray[i] > 5) {
      console.log(numberArray[i] + " è maggiore di 5");
      count += numberArray[i];
    }
  }
  console.log("count:" + count);
  return;
};
checkArray(numbers);

/* EXTRA 2
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "shoppingCartTotal" che calcola il totale dovuto al negozio (tenendo conto delle quantità di ogni oggetto).
*/

let shoppingCart = [
  { price: 5, name: "Item 1", id: 1, quantity: 4 },
  { price: 48, name: "Item 2", id: 2, quantity: 2 },
  { price: 16, name: "Item 3", id: 3, quantity: 1 },
];

const shoppingCartTotal = function (cart) {
  count = 0;
  for (let i = 0; i < cart.length; i++) {
    count += cart[i].price * cart[i].quantity;
  }
  return count;
};

console.log("Il tuo totale è " + shoppingCartTotal(shoppingCart));

/* EXTRA 3
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "addToShoppingCart" che riceve un nuovo oggetto dello stesso tipo, lo aggiunge a "shoppingCart" e ritorna il nuovo numero totale degli elementi.
*/

const addToShoppingCart = function (item) {
  shoppingCart.push(item);
  return shoppingCartTotal(shoppingCart);
};

console.log(
  "Il tuo nuovo totale è " +
    addToShoppingCart({ price: 4, name: "Item 4", id: 4, quantity: 8 })
);

/* EXTRA 4
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "maxShoppingCart" che riceve l'array "shoppingCart" e ritorna l'oggetto più costoso in esso contenuto.
*/

const maxShoppingCart = function (cart) {
  let maxCandidate = shoppingCart[0];
  for (let i = 1; i < shoppingCart.length; i++) {
    if (shoppingCart[i].price > maxCandidate.price) {
      maxCandidate = shoppingCart[i];
    }
  }
  return maxCandidate;
};

console.log("L'oggetto più costoso è " + maxShoppingCart(shoppingCart).name);

/* EXTRA 5
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "latestShoppingCart" che riceve l'array "shoppingCart" e ritorna l'ultimo elemento.
*/

const latestShoppingCart = function (shoppingCart) {
  return shoppingCart[shoppingCart.length - 1];
};

console.log("Il tuo ultimo oggetto è " + latestShoppingCart(shoppingCart).name);

/* EXTRA 6
 Crea una funzione chiamata "loopUntil" che riceve un numero intero come parametro con valore tra 0 e 9.
 La funzione è composta da un ciclo che stampa un numero casuale tra 0 e 9 finchè il numero casuale non è maggiore di x per tre volte di fila.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* EXTRA 7
Crea una funzione chiamata "average" che riceve un array come parametro e ne ritorna la media aritmetica. La funzione salta automaticamente i valori non numerici nell'array.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* EXTRA 8
 Crea una funzione chiamata "longest" che trova la stringa più lunga all'interno di un array di stringhe fornito come parametro.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* EXTRA 9
 Crea una funzione per creare un filtro anti-spam per la tua casella email. La funzione riceve un parametro stringa chiamato "emailContent", e torna un valore booleano.
 La funzione deve ritornare true se "emailContent" non contiene le parole "SPAM" o "SCAM".
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* EXTRA 10
 Scrivi una funzione che riceve una data come parametro, e calcola il numero di giorni passati da quella data.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* EXTRA 11
 Scrivi una funzione chiamata "matrixGenerator" che riceve come parametri due numeri interi, "x" e "y".
 Il risultato deve essere una matrice di "x" volte "y", e i valori devono rispecchiare gli indici della posizione all'interno della matrice.
 Es.: x = 3, y = 2
 ["00","01","02"
 "10","11","12"]
*/

/* SCRIVI QUI LA TUA RISPOSTA */
