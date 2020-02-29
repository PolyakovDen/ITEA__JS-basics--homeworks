// Task 0: Создать функцию 'copy', которая принимает на вход 
// один объект и возвращает точную копию (новый объект) с
// теми же свойствами.

'use strict'

let user = {
    name: 'Dima',
    age: 25,
    eyesColor: 'green',
    isAdmin: false,
    role: 2,
};

function copy(user) {
    let newUser = {};

    for (let key in user) {
        newUser[key] = user[key];
    }

    return newUser;
}

let userCopy = copy(user);
console.log(userCopy);
