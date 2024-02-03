//9 Дано натуральне число. Знайти та вивести на сторінку всі його дільники.


let number = parseInt(prompt("Enter a natural number"));
let allDividers = '';


for (divider = 1; divider <= number; divider++){
    rest = number % divider;
    if(rest === 0){
        allDividers += `${divider}, `;
    }
}

allDividers = allDividers.slice(0, -2);
alert(`Dividers for natural number ${number} are: ${allDividers}.`);