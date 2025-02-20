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

const loopUntil = function (num) {
  if (num < 0 || num > 9) {
    return console.log("Invalid number");
  }
  let randomNumber;
  let counter = 0;
  while (counter < 3) {
    randomNumber = Math.floor(Math.random() * 11);
    console.log(randomNumber);
    if (randomNumber > num) {
      counter++;
    } else {
      counter = 0;
    }
  }
  return;
};

loopUntil(4);

/* EXTRA 7
Crea una funzione chiamata "average" che riceve un array come parametro e ne ritorna la media aritmetica. La funzione salta automaticamente i valori non numerici nell'array.
*/

const average = function (list) {
  let count = 0;
  let sumOfNumbers = 0;

  for (let i = 0; i < list.length; i++) {
    const element = list[i];
    if (typeof element === "number") {
      sumOfNumbers += element;
      count++;
    }
  }
  if (count === 0) {
    return undefined;
  }
  return sumOfNumbers / count;
};

console.log("Avg:" + average([1, 23, "car", 45, "bingus"]));

/* EXTRA 8
 Crea una funzione chiamata "longest" che trova la stringa più lunga all'interno di un array di stringhe fornito come parametro.
*/

const longest = function (listOfNames) {
  let candidate = listOfNames[0];
  for (let i = 1; i < listOfNames.length; i++) {
    if (listOfNames[i].length > candidate.length) {
      candidate = listOfNames[i];
    }
  }
  return candidate;
};

console.log(longest(["Bingus", "THE MIMIC", "Mentina", "Miku"]));

/* EXTRA 9
 Crea una funzione per creare un filtro anti-spam per la tua casella email. La funzione riceve un parametro stringa chiamato "emailContent", e torna un valore booleano.
 La funzione deve ritornare true se "emailContent" non contiene le parole "SPAM" o "SCAM".
*/

const spamFilter = function (emailContent) {
  if (emailContent.includes("SPAM") || emailContent.includes("SCAM")) {
    return false;
  } else {
    return true;
  }
};

console.log("Non spam: " + spamFilter("Ciao Monello tvb"));
console.log(
  "Spam: " + spamFilter("From: principe cubano assolutamente non SCAM")
);

/* EXTRA 10
 Scrivi una funzione che riceve una data come parametro, e calcola il numero di giorni passati da quella data.
*/

const numberOfDays = function (date) {
  let dateMillis = date.getTime();
  let nowMillis = new Date().getTime();
  if (nowMillis < dateMillis) {
    return null;
  }
  return (nowMillis - dateMillis) / (1000 * 60 * 60 * 24); // millisecondi * secondi * minuti * ore
};

console.log(numberOfDays(new Date("2/1/2025")));
console.log(new Date("2/1/2025").toString());

/* EXTRA 11
 Scrivi una funzione chiamata "matrixGenerator" che riceve come parametri due numeri interi, "x" e "y".
 Il risultato deve essere una matrice di "x" volte "y", e i valori devono rispecchiare gli indici della posizione all'interno della matrice.
 Es.: x = 3, y = 2
 ["00","01","02"
 "10","11","12"]
*/

let result = [];
for (let i = 0; i < y; i++) {
  let row = [];
  for (let j = 0; j < x; j++) {
    row.push(i + "" + j);
  }
  result.push(row);
}
return result;

// x è il numero di elementi nell'array, y è il numero di array dentro l'array principale
