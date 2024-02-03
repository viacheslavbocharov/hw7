// 7 Вивести суму лише парних чисел в діапазоні від 30 до 80.

let startNumber = 30;
let lastNumber = 80;
let sum = 0;

for (i = startNumber; i <= lastNumber; i++) {
    if (i % 2 !== 0) {
        continue;
    }
    sum += i;
}

console.log(`The sum of even numbers from ${startNumber} to ${lastNumber} is ${sum}`)