var arr = ['asas', 'asad'];

function push(arr) {
    for (var i = 1; i < arguments.length; i++){
        arr[arr.length] = arguments[i];
    }
}

push(arr, 2, 3, 4);
console.log(arr);

