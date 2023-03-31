
const h1 = document.querySelector("h1");
console.log(h1);
//creo la lista da mostrare
let list = [];

for (let i = 0; i < 5; i++) {
  const numeroRandom = generateRandomNumber(list, 1, 100);
  list.push(numeroRandom);
}
console.log(list);
//inserisco la lista nell'HTML
h1.innerHTML = list;

setTimeout(function () {
  h1.className = ("hide");
}, 5000)








//-------------------------FUNCTIONS-----------------------------------

/**
 *  questa funzione ti genera un numero random, la lista serve nel caso in cui si voglia generare più di un numero ed evitare che questi siano uguali fra di loro;
 * @param {lista} arrList 
 * @param {numero minimo} min 
 * @param {numero massimo} max 
 * @returns numero random
 */

function generateRandomNumber(arrList, min, max) {

  let randomNumber;
  let isValidNumber = false;

  while (!isValidNumber) {
    randomNumber = Math.floor(Math.random() * (max - min + 1) + min);

    if (!arrList.includes(randomNumber)) {
      isValidNumber = true;
    }
  }
  return randomNumber;
}
