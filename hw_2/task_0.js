// Task 1: Используя все 3 варианта цикла
// Есть строка 'adfsdfdsaffasfaaaaasfsfasfdsf'
// проверить, сколько раз встречается буква a и вывести ее в консоль

'use strict'

let str = 'adfsdfdsaffasfaaaaasfsfasfdsf';
let count = 0;

//'for' loop

for (let i = 0; i < str.length; i++) {
    if (str.charAt(i) === 'a') {
        count++;
    }
}
console.log(count);

//'while' loop
let i = 0;
let count = 0;

while (i < str.length) {
    if (str.charAt(i) === 'a') {
        count++;
    }
    i++;
}
console.log(count);

//'do..while' loop
let i = 0;
let count = 0;

do {
    if (str.charAt(i) === 'a') {
        count++;
    }
    i++;
} while (i < str.length);
console.log(count);