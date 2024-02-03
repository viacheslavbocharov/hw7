// 4 Знайти суму всіх цілих чисел від 1 до 15.
let startNumber = 1;
let lastNumber = 15;
let sum = 0;

for (i = startNumber; i <= lastNumber; i++) {
      sum += i;
}

console.log(`${startNumber} + ` + (startNumber + 1) + ` + ... + ${lastNumber} = ${sum}`)