//6 Знайти середнє арифметичне всіх цілих чисел від 1 до 500.

let startNumber = 1;
let lastNumber = 500;
let sum = 0;
let average = 0;
let counter = 0;

for (i = startNumber; i <= lastNumber; i++) {
    sum += i;
    counter++;    
}
average = sum / counter;
console.log(`The average of numbers from ${startNumber} to ${lastNumber} is ${average}`)