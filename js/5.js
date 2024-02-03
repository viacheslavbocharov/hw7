// Знайти добуток усіх цілих чисел від 15 до 35.

let startNumber = 15;
let lastNumber = 35;
let mult;

for (i = startNumber; i <= lastNumber; i++) {

    if (i === startNumber) {
        mult = startNumber;
        continue;
    }

    mult *= i;
    console.log(mult)
}

console.log(`${startNumber} * ` + (startNumber + 1) + ` * ... * ${lastNumber} = ${mult}`)