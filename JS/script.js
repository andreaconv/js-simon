//prendo gli elementi dall'HTML
const h1 = document.querySelector("h1");
const input = document.querySelector("input");
const btn = document.querySelector("button");
//creo la lista da mostrare
let list = [];
//creo la lista dei numeri inseriti
let arrNumberInput = [];
let numeroInserito = false;


//ciclo per generare i numeri random
for (let i = 0; i < 5; i++) {
  const numeroRandom = generateRandomNumber(list, 1, 100);
  list.push(numeroRandom);
}
console.log("lista mostrata", list)
//inserisco la lista nell'HTML
h1.innerHTML = list;

//dopo 5 secondo elimino la lista e faccio apparire l'input e il bottone
setTimeout(function () {
  h1.classList.add("hide");
  input.classList.remove("hide");
  btn.classList.remove("hide");
}, 5000)

btn.addEventListener("click", function () {
  //prendo i valori inseriti e li aggiungo all'array arrNumberInput
  arrNumberInput.push(parseInt(input.value));
  console.log("numeri inseriti", arrNumberInput);  
  //reset input
  input.value = ``;
})

//FIXME: Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.

//se sono tutti esatti output giusto altrimenti riprova
if (list.includes(arrNumberInput)) {
  console.log("giusto")
} else {
  console.log("sbagliato")
}








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
