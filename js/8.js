// 8 Вивести всі числа в діапазоні від 100 до 200 кратні 3.

let startNumber = 100;
let lastNumber = 200;
let multilesOf = 3;
let str = '';


for (i = startNumber; i <= lastNumber; i++) {

    if (i % multilesOf !== 0) {
        continue;
    }
    str += `${i}, `;
}

str = str.slice(0, -2);

console.log(`Numbers in the range from ${startNumber} to ${lastNumber} are multiples of ${multilesOf}: ${str}.`);