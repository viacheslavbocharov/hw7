// 2 Вивести квадрати чисел від 10 до 20.

//Вопрос: нужно ли мне выводить в отдельную переменную параметр и условие цикла для дальнейшего удобства работы с кодом и болешей наглядности или это излишне?
let startNumber = 10;
let finishNumber = 20;

for (let i = startNumber; i <= finishNumber; i++) {
    let iMul = i*i;
console.log(`${i}^2 = ${iMul}`);
}

//простой вариант
// for (let i = 10; i <= 20; i++) {
//     let iMul = i*i;
// console.log(`${i}^2 = ${iMul}`);
// }