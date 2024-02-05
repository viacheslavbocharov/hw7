// Надрукувати повну таблицю множення від 1 до 10.

for (let x = 1; x <= 10; x++) {
    
    console.log(`${x} times table:`)
    
    for (let y = 1; y <= 10; y++) {
        let multRes = x * y;
        console.log(`${x} * ${y} = ${multRes}`);
    }

}