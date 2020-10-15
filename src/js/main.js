'use strict';

//"Загадывание случайного числа от 1 до 100"

let numberBot = function() {

  let isNumber = function(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
  };
  
  return function repeat() {

    function getRandomNumber(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min + 1)) + min; 
    }

    let randomNumber = getRandomNumber(1, 100);
    
    let answer = prompt('Угадай число от 1 до 100');

    if (answer === null) {
      alert('Игра окончена');
    } else if (!isNumber(answer)) {
      alert('Введи число!');
      return repeat();
    } else if (answer === randomNumber) {
      console.log(randomNumber);
      alert('Поздравляю, Вы угадали!!!');
      let answerTwo = confirm('Хотите сыграть еще?');
      if (answerTwo === 1){
        return repeat();
      }
    } else if (answer > randomNumber) {
      console.log(randomNumber);
      alert('Загаданное число меньше');
      return repeat();
    } else if (answer < randomNumber) {
      console.log(randomNumber);
      alert('Загаданное число больше');
      return repeat();
    } 
  };
};

numberBot()();