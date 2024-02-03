// 1 Вивести на сторінку в один рядок через кому числа від 10 до 20.

//Вопрос: нужно ли мне выводить в отдельную переменную параметр и условие цикла для дальнейшего удобства работы с кодом и болешей наглядности в этом задании или это излишне?

let str;
let startNumber = 10;
let finishNumber = 20;

for (let i = startNumber; i <= finishNumber; i++) {

    if (i === startNumber) {
        str = `${i}`;
        continue;
    }
    str += `, ${i}`;
}

console.log(str)

//Простой вариант:
// let str;

// for (let i = 10; i <= 20; i++) {

//     if (i === 10) {
//         str = `${i}`;
//         continue;
//     }
//     str += `, ${i}`;
// }

// console.log(str)