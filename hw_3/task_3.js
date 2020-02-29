// Реализовать аналогичный функционал метода Object.assign():
// copy(first, second, third)

'use strict'

let motherBoard = {
    nameBoard : 'Asus ROG Strix X570-I Gaming',
    socket : 'AM4'
}

let graphicsCard = {
    nameCard : 'Asus Geforce RTX 2080 TI',
    videoMemory : 'GDDR6 11GB'
}

let ssd = {
    nameSsd : 'HP 1.92ТБ SAS SSD 3.5',
    memory: '1.92TB',
    priceInUsd : 32250
}

let copyAll = (obj1, obj2, obj3) => Object.assign (obj1, obj2, obj3);


console.log (copyAll(motherBoard, graphicsCard, ssd));