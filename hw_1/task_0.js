//Задачка 0 - конкатинация строк

'use strict' //активирован 'строгий' режим

let randomFirstColor = Math.floor(Math.random() * 255); //Сначала мы достаем случайное число от 0 до 1, потом умножаем на 255, и округляем его
let randomSecondColor = Math.floor(Math.random() * 255); 
let randomThirdColor = Math.floor(Math.random() * 255); 
let randomOpacity = Math.random();

let randomResult = 'background-color: rgba(' + randomFirstColor + ', '
+ randomSecondColor + ', ' + randomThirdColor + ', ' + randomOpacity.toFixed(1) + ');';  //toFixed - округляет число до 'n' знаков

console.log (randomResult);
