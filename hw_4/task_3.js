// 4. Есть массив [1, 4, 5, 1, 3, 3] На основе его создать новый массив, где
// будут квардат каждого число, используя for и map

var arr = [1, 4, 5, 1, 3, 3];

function square (arr) {
    var arrSquare = [];
    for (var i = 0; i < arr.length; i++) {
        arrSquare.push(arr[i] * arr[i]);
    }
    return arrSquare;
}
var result = square(arr);
console.log (result);

// Реализация map
function squareArr (arr) {
    var arrSquare = [];
    arrSquare = arr.map(function(num){
        return num * num;
    });
    return arrSquare;
}
var result = squareArr(arr);
console.log(result);
