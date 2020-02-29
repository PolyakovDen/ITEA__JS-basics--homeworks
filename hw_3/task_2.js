// Условие первой задачи но с измением name, age color -> перезаписать любыми значениями
// function copyWithModify(origin, name, age, color) {
  
// }
// copyWithModify(user, 'Max', 20, 'red');

// if (user[key] = user.name) {
//     newUser.name = 'Max';
// } if else (user[key] = user.age) {
//     newUser.age = 20;
// } else if (user[key] = user.eyesColor) {
//     newUser.eyesColor = 'red';
// }

'use strict'

let user = {
    name: 'Dima',
    age: 25,
    eyesColor: 'green',
    isAdmin: false,
    role: 2,
};

function copyWithModify(user, name, age, eyesColor) {
    let newUser = {};

    for (let key in user) {
        newUser[key] = user[key];
        if (user[key] === user.name) {
            newUser.name = name;
        } 
        if (user[key] === user.age) {
            newUser.age = age;
        }
        if (user[key] === user.eyesColor) {
            newUser.eyesColor = eyesColor;
        }
    }

    return newUser;
}


let userCopy = copyWithModify(user, 'Max', 20, 'red');
console.log(userCopy);