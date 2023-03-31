let list = [];

for (let i = 0; i < 5; i++){
  const numeroRandom = generateRandomNumber (list,1,100);
  list.push(numeroRandom);
}

console.log(list);







//-------------------------FUNCTIONS-----------------------------------

/**
 *  questa funzione ti genera un numero random, la lista serve nel caso in cui si voglia generare più di un numero ed evitare che questi siano uguali fra di loro;
 * @param {lista} arrBlackList 
 * @param {numero minimo} min 
 * @param {numero massimo} max 
 * @returns numero random
 */

function generateRandomNumber (arrList, min, max){
  
  let randomNumber;
  let isValidNumber = false;

  while(!isValidNumber){
    randomNumber = Math.floor(Math.random() * (max - min + 1) + min);

    if(!arrList.includes(randomNumber)){
      isValidNumber = true;
    }
  }
  return randomNumber;
}
