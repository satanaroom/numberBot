'use strict';

//"Загадывание случайного числа от 1 до 100"

let numberBot = function() {

  let isNumber = function(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
  };

  let answer = prompt('Угадай число от 1 до 100');
  
  function getRandomNumber(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; 
  }

  let randomNumber = getRandomNumber(1, 100);
  console.log(randomNumber);

  if (answer === null) {
    alert('Игра окончена');
  } else if (!isNumber(answer)) {
    alert('Введи число!');
    numberBot();
  } else if (answer === randomNumber) {
    alert('Поздравляю, Вы угадали!!!');
  } else if (answer > randomNumber) {
    alert('Загаданное число меньше');
  } else if (answer < randomNumber) {
    alert('Загаданное число больше');
  } 

};

numberBot();