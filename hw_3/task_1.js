// Task 1: Создать функцию isEquil, которая принимает на вход 2 объекта,
// сравнивает их свойства, возвращает true - если объекты одинаковы по 
// значениям или false, если чем-то отличаются

'use strict'

let user = {
    name: 'Dima',
    age: 25,
    eyesColor: 'green',
    isAdmin: false,
    role: 2
};

let user1 = {
    name: 'Dima',
    age: 25,
    eyesColor: 'green',
    isAdmin: false,
    role: 2,
};

function isEquil(user, user1) {

    if (user === user1) {
        return true;
    } else if (Object.keys(user).length != Object.keys(user1).length) {
        return false;
    }
   
    for (let key in user) {
        if (user[key] !== user1[key]){
            return false;
        }
    }

    return true;

}

console.log(isEquil(user, user1));