
function forEach(arr, cb) {
    for (i = 0; i < arr.length; i++) {
        cb(arr[i], i, arr);
    }
}

var nums = [2, 5, 7];
var sum = 0;

function sumArr(item) {
    sum += item;
}

forEach(nums, sumArr);
console.log(sum);