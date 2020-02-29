//Задачка: 4 ДОПОЛНИТЕЛЬНАЯ

'use strict' //активирован 'строгий' режим

let number;
number = 24;

if (number >= 0 && number <= 2) {
    console.log('Сутки только начались');
} else if (number > 2 && number <= 5) {
    console.log('Еще рано, можно спать');
} else if (number > 5 && number <= 7) {
    console.log('Еще рано, можно спать');
} else if (number > 7 && number <= 10) {
    console.log('Мам, можно еще чуть-чуть по спать');
} else if (number > 10 && number <= 14) {
    console.log('Уроки в школе');
} else if (number > 14 && number <= 17) {
    console.log('Продленка');
} else if (number > 17 && number <= 19) {
    console.log('Дорога домой');
} else if (number > 19 && number <= 23) {
    console.log('Урррааа :)');
} else {
    console.log('Такого времени суток нету');
}