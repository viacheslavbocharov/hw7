//10 Дано натуральне число. Знайти та вивести на сторінку всі його дільники.
//Визначити кількість його парних дільників

let number = parseInt(prompt("Enter a natural number"));
let allDividers = '';
let evenDividersCounter = 0;


for (divider = 1; divider <= number; divider++){
    rest = number % divider;

    if(rest === 0){
        allDividers += `${divider}, `;

        if(divider % 2 === 0){
            evenDividersCounter++
        }
    }
}

allDividers = allDividers.slice(0, -2);


alert(`Dividers for natural number ${number} are: ${allDividers}. Thera are ${evenDividersCounter} even dividers`);