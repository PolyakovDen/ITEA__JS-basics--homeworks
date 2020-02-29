function myFilter(arr, cb){
    var newArr = [];
    for (var i = 0; i < arr.length; i++){
        if ( cb(arr[i], i, arr) ) {
            newArr.push(arr[i]);
        }
    }
    return newArr;
}
