//prendo gli elementi dall'HTML
const h1 = document.querySelector("h1");
const input = document.querySelector("input");
const btn = document.querySelector("button");
//creo la lista da mostrare
let list = [];
//creo la lista dei numeri inseriti
let numberInput = [];
console.log(numberInput)


//ciclo per generare i numeri random
for (let i = 0; i < 1; i++) {
  const numeroRandom = generateRandomNumber(list, 1, 100);
  list.push(numeroRandom);
}
console.log(list)
//inserisco la lista nell'HTML
h1.innerHTML = list;

//dopo 5 secondo elimino la lista e faccio apparire l'input e il bottone
setTimeout(function () {
  h1.classList.add("hide");
  input.classList.remove("hide");
  btn.classList.remove("hide");
}, 1000)

//TODO:prima di prendere i valori inseriti devo controllare che siano giusti (dei numeri)


//prendo i valori inseriti e li confronto con la lista dei numeri
//se sono tutti esatti output giusto altrimenti riprova
btn.addEventListener("click", function(){
  numberInput.push(input.value);

  if (list.includes(numberInput)){
    console.log("sbagliato")
  }else{
    console.warn("giusto")
  }

  
})









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
