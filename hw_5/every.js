function myEvery(arr, cb) {
    for (i = 0; i < arr.length; i++) {
        if ( cb(arr[i], i, arr) ) {
            return false;
        }
    }
    return true;
}