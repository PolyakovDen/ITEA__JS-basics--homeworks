// 2. Функция принимает два массива. Возвращает новый массив, где каждый элемент это сумма двух других массив
// var first = [2, 3]
// var second = [3, 2]
// var result = [5, 5];
// Реализовать через forEach и for

var firstArr = [7, 3];
var secondArr = [2, 1];

// Реализация с помощью метода for
function sumArr (arr1, arr2) {
    var thirdArr = [];
    for (var i = 0; i < arr1.length; i++) {
        thirdArr.push(arr1[i] + arr2[i]);
    }
    return thirdArr;
}

console.log (sumArr (firstArr, secondArr));


// Реализация с помощью метода forEach

function sumArr (arr) {
    var thirdArr = [];

    arr.forEach(function(item, i){
        thirdArr.push(item + secondArr[i]);
    });

    return thirdArr;
}

var result = sumArr(firstArr);
console.log(result);