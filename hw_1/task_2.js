//Задачка: 2

'use strict' //активирован 'строгий' режим

let firstNumber = Math.floor(Math.random() * 1000);
let secondNumber = Math.floor(Math.random() * 1000);

console.log ('Первое число: ' + firstNumber + ' ||' + ' Второе число: ' + secondNumber);

let maxNumber = firstNumber > secondNumber ? (
    console.log ('Да! Первое число больше')
) : (
    console.log ('Нет! Второе число больше')
);

