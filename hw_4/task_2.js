// Есть 3 массива, посчитать их общую сумму. На выходе одно число.
// Должна быть функция, которая принимае эти 3 массива, на выходе возвращает 1 число


var firstArr = [2, 3];
var secondArr = [3, 2];
var thirdArr = [5, 5];


function sum (arr) {
    var fourthArr = [];

    arr.forEach(function(item, i){
        fourthArr.push(item + secondArr[i] + thirdArr[i]);
    });

    return fourthArr;
}

var sum = sum(firstArr);
console.log (sum);

var result = sum.reduce(function(a, b){
    return a + b;
});

console.log(result);