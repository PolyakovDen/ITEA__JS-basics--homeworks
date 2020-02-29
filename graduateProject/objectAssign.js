// Реализовать аналогичный функционал метода Object.assign():
// copy(first, second, third)


var motherBoard = {
    name: 'pp',
    nameBoard : 'Asus ROG Strix X570-I Gaming',
    socket : 'AM4'
};

var graphicsCard = {
    name: 'pp',
    nameCard : 'Asus Geforce RTX 2080 TI',
    videoMemory : 'GDDR6 11GB'
};

var ssd = {
    name: 'ppq',
    nameSsd : 'HP 1.92ТБ SAS SSD 3.5',
    memory: '1.92TB',
    priceInUsd : 32250
};


function copyObjects(arr) {
    var newObj = {};
  
    for (var i = 0; i < arr.length; i++){
      for (var key in arr[i]) {
          newObj[key] = arr[i][key];
      }
    }
  
    return newObj;
  };

var result = copyObjects([motherBoard, graphicsCard, ssd]);
console.log(result);


// function copyObjects() {
//     var newObj = {};

//     for(var i = 0; i < arguments.length; i++) {
//         for(var key in arguments[i]) {
//             newObj[key] = arguments[i][key];
//         }
//     }

//     return newObj;
// }