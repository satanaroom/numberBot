'use strict';

//"Загадывание случайного числа от 1 до 100"

let numberBot = function() {

  let isNumber = function(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
  };
  let tryNumber = 10;

  function repeat() {

    function getRandomNumber(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min + 1)) + min; 
    }
    let randomNumber = getRandomNumber(1, 100);
    
    let question = function(){
      return confirm('Попытки закончились, хотите сыграть еще?');
    };

    let answer = +prompt('Угадай число от 1 до 100');
    if (tryNumber > 1){
      if (answer === null) {
            alert('Игра окончена');
          } else if (!isNumber(answer)) {
            alert('Введи число!');
            return repeat();
          } else if (answer === randomNumber) {
            console.log(randomNumber);
            alert('Поздравляю, Вы угадали!!!');
            let answerTwo = confirm('Хотите сыграть еще?');
            if (answerTwo === true){
              numberBot();
            } else {
              alert('Игра окончена');
            }
          } else if (answer > randomNumber) {
            console.log(randomNumber);
            alert('Загаданное число меньше, осталось попыток ' + (tryNumber - 1));
            tryNumber--;
            console.log(tryNumber);
            return repeat();
          } else if (answer < randomNumber) {
            console.log(randomNumber);
            alert('Загаданное число больше, осталось попыток ' + (tryNumber - 1));
            tryNumber--;
            console.log(tryNumber);
            return repeat();
          }
    } else if (tryNumber === 1 && answer > randomNumber){
      alert('Загаданное число меньше, осталось попыток ' + (tryNumber - 1));
      if (question() === false){
        alert('Игра окончена');
      } else {
        numberBot();
      }
    } else if (tryNumber === 1 && answer < randomNumber){
      alert('Загаданное число больше, осталось попыток ' + (tryNumber - 1));
      if (question() === false){
        alert('Игра окончена');
      } else {
        numberBot();
      }
    }
  }
  repeat();
};

numberBot();