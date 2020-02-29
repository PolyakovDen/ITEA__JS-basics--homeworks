// 4. Есть массив имен. На вход функции
// Создать новый массив на выходе, который вернет имена, которые меньше 4 букв
// Цикл for метод filter

var names = ['Den', 'Masha', 'Dasha', 'Sasha', 'Yan', 'Alex', 'Bob'];

function littleNames(names) {
    var newNames = [];

    for (var i = 0; i < names.length; i++) {
        if (names[i].length < 4) {
             newNames.push(names[i]);
        }
    }
    
    return newNames;
}

var result = littleNames(names);
console.log(result);


// Реализация filter
function littleNames(names) {
    var newNames = [];

    newNames = names.filter(word => word.length < 4);

    return newNames;
}

var result = littleNames(names);
console.log(result);