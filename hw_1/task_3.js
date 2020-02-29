//Задачка: 3

'use strict' //активирован 'строгий' режим

let number;
number = 87;
switch (true) {
    case number >= 0 && number <= 2:
        console.log('Сутки только начались');
        break;
    
    case number > 2 && number <= 5:
        console.log('Еще рано, можно спать');
        break;

    case number > 5 && number <= 7:
        console.log('Еще рано, можно спать');
        break;
    
    case number > 7 && number <= 10:
        console.log('Мам, можно еще чуть-чуть по спать');
        break;

    case number > 10 && number <= 14:
        console.log('Уроки в школе');
        break;

    case number > 14 && number <= 17:
        console.log('Продленка');
        break;

    case number > 17 && number <= 19:
        console.log('Дорога домой');
        break;

    case number > 19 && number <= 23:
        console.log('Урррааа :)');
        break;

    default:
        console.log('Такого времени суток нету');
}

