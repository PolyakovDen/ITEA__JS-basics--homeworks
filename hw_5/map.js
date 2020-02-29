var map = function (arr, cb){
    var newArr = [];
    for (var i = 0; i < arr.length; i++){
        newArr.push( cb(arr[i], i, arr) );
    }
    return newArr;
}
