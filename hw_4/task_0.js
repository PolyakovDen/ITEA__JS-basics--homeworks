// 1. Есть массив чисел, посчитать сумму всех элементов используя
// for обычный и forEach. Реализовать через функцию, которая на вход принимает
// массив.


var num = [10, 20, 30];


function sumNum (arr) {
    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}

var result = sumNum(num);
console.log(result);


// Реализация с помощью метода forEach
function sumNum (arr) {
    var sum = 0;  

    arr.forEach(function(item){
        sum += item;
    });

    return sum;
}

var result = sumNum(num);
console.log(result);
